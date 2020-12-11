#define controller(NAME'VALUE) #iController = iController + 1
i$NAME.Controller = iController
i$NAME = $VALUE
k$NAME init i$NAME
#

#define if(CONTROLLER'OPERATOR'PARAMETERS) #if ( iControl == i$CONTROLLER.Controller ) then

i$CONTROLLER $OPERATOR $PARAMETERS#

#define zero #.00000001#

#define P #p ( iP )
iP = iP + 1
#

#define synth(NAME) #
i$NAME.Synth = iS
iS = iS + 1
#

#define control(NAME) #
k$NAME linseg i ( k$NAME ), iAttack, i$NAME
#

sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giNextFT vco2init 31, 100

instr 1

iS = 1
iSynth = 0

$synth(Pluck)
$synth(HeavyMetal)

iP = 4
iControl = $P
iValue = $P

iNote tival

tigoto note

if ( iNote = 1 ) kgoto note

initialization:

prints "\n#initialization"

iController = 0

$controller(Loudness'0)
$controller(LoudnessSustain'0)

$controller(PitchOriginal'0)
$controller(Detune'0)
iPitch = 0

$controller(Attack'$zero)
$controller(Decay'$zero)
$controller(Release'$zero)

$controller(Wave'-1)
iWaveFT = -1

kLoudness init 0
kPitch init 0

aNote init 0

#include 'pluck.init.instr'
#include 'heavyMetal.init.instr'

note:

prints "\n#note"

while ( iControl > 0 ) do

$if(Loudness'='iValue)

else$if(LoudnessSustain'='iValue)

else$if(PitchOriginal'cps2pch'iValue, 12)

iPitch = iPitchOriginal * octave ( iDetune )

else$if(Detune'='iValue)

iPitch = iPitchOriginal * octave ( iDetune )

else$if(Attack'='iValue)

else$if(Decay'='iValue)

else$if(Release'='iValue)

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

iLoudnessInitial = i ( kLoudness )

if ( iControl == -1 ) kgoto release
if ( iControl == -1 ) igoto release

kLoudness linseg iLoudnessInitial, iAttack, iLoudness, iDecay, iLoudnessSustain


goto synth

release:

prints "#release"

iLoudness = 0
iLoudnessSustain = 0

kLoudness linseg iLoudnessInitial, iRelease, 0

synth:

$control(Pitch)

#include 'pluck.ctrl.instr'
#include 'heavyMetal.ctrl.instr'

else

aNote oscil kLoudness, iPitch, iWaveFT, iNote * -1

endif

outs aNote, aNote

prints "\n#end\n"

endin
