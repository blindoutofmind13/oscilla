gkLoudness init 0
gkPitch init 0

giPitchTransition = .02
giLoudnessTransition = 1

$TIMBRE(k'FilterQ'.85)

gkFilterRate init .0002
gkVibratoFrequency init 5
gkVibratoAmplitude init .01

iAttackWaveform ftgen 4, 0, 8192, 1, "mandpluk.aiff", 0, 0, 0
iLoopingWaveform ftgen 5, 0, 256, 1, "impuls20.aiff", 0, 0, 0
iVibratoWaveform ftgen 6, 0, 256, 10, 1

instr 1

note:

iTied tival

if ( iTied == 0 ) then

iLoudnessA = 0
iPitchA = cpspch ( p4 ) * octave ( giDetune - 1 / 24 )

iLoudnessB = 0

kLoudness init 0
kPitch init 440

aNote init 0

else

prints "Tied Note ..."

iLoudnessA = i ( kLoudness )
iPitchA = i ( kPitch )

xtratim giLoudnessTransition
kLoudnessTransition linseg iLoudnessA, giLoudnessTransition, 0
aR = aNote * kLoudnessTransition

outs aR, aR

iLoudnessA = 0

endif

iLoudnessB = p5
iPitchB = cpspch ( p4 ) * octave ( giDetune )

kLoudness linsegr iLoudnessA, giLoudnessTransition, iLoudnessB, giLoudnessTransition, 0
;i ( kLoudness ), 1
kPitch linseg iPitchA, giPitchTransition, iPitchB

aNote oscili kLoudness, kPitch, 2

;aNote moog gkLoudness, gkPitch, gkFilterQ, gkFilterRate, gkVibratoFrequency, gkVibratoAmplitude, 3, 3, 3

outs aNote, aNote

endin

instr Pitch

iPitchA = i ( gkPitch )
iPitchB = cpspch ( p4 ) * octave ( giDetune )

gkPitch = iPitchB
;gkPitch linseg iPitchA, giPitchTransition, iPitchB

endin

instr Loudness

iLoudnessA = i ( gkLoudness )
iLoudnessB = p4

print iLoudnessA
print iLoudnessB

gkLoudness linseg iLoudnessA, giLoudnessTransition, iLoudnessB

endin
