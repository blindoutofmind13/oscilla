#define controller(NAME) #iController = iController + 1
i$NAME.Controller = iController#

#define if(CONTROLLER'OPERATOR'PARAMETERS) #if ( iControl == i$CONTROLLER.Controller ) then

i$CONTROLLER $OPERATOR $PARAMETERS#

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

iController = 0

$controller(Loudness)
$controller(LoudnessSustain)
$controller(Pitch)
$controller(Detune)
$controller(Attack)
$controller(Decay)
$controller(Wave)

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

$if(Loudness'='iValue)

else$if(LoudnessSustain'='iValue)

else$if(Pitch'cps2pch'iValue, 12)

iPitch = iPitch * octave ( iDetune )

else$if(Detune'='iValue)

else$if(Attack'='iValue)

else$if(Decay'='iValue)

else$if(Wave'='iValue)

if ( iWave > -1 || iWave > 4 ) then

iWaveFT vco2ift iPitch, iWave

else

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
