#define IF(CONTROLLER) #if ( iControl == $CONTROLLER ) then#
#define zero #.00000001#

#define P #p ( iP )
iP = iP + 1#

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giNextFT vco2init 31, 100

instr 1

iP = 4
iControl = $P
iValue = $P

iNote tival

tigoto note

if ( iNote = 1 ) kgoto note

initialization:

prints "\n#initialization"

iLoudness = 0
iLoudnessSustain = 0
iPitch = 0
iDetune = 0
iAttack = $zero
iDecay = $zero
iWave = -1
iWaveFT = -1

kLoudness init 0
kPitch init 0

aNote init 0

note:

prints "\n#note"

while ( iControl != 0 ) do

$IF(1)

iLoudness = iValue

else$IF(2)

iLoudnessSustain = iValue

else$IF(3)

iPitch = cpspch ( iValue ) * octave ( iDetune )

else$IF(4)

iDetune = iValue

else$IF(5)

iAttack = iValue

else$IF(6)

iDecay = iValue

else$IF(7)

iWave = iValue
if ( iWave > -1 || iWave > 4 ) then

iWaveFT vco2ift iPitch, iWave

else

prints "#sine"

iWaveFT = -1

endif

endif

iControl = $P
iValue = $P

od

print iLoudness
print iPitch
print iWaveFT

kLoudness linseg i ( kLoudness ), iAttack, iLoudness, iDecay, iLoudnessSustain
kPitch linseg i ( kPitch ), iAttack, iPitch

aNote poscil kLoudness, kPitch, iWaveFT, iNote * -1

outs aNote, aNote

prints "\n#end\n"

endin
