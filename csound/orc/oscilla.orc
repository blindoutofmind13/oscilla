sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giSine ftgen 1, 0, 16384, 10, 1
giSquare ftgen 2, 0, 16384, 10, 1, 0 , .33, 0, .2 , 0, .14, 0 , .11, 0, .09
giSaw ftgen 3, 0, 16384, 10, 0, .2, 0, .4, 0, .6, 0, .8, 0, 1, 0, .8, 0, .6, 0, .4, 0,.2

#include "../orc/timbre.orc"

$TIMBRE(i'Detune'0)

;#include "../orc/moog.orc"

instr 1

iLoudnessTransition = .1
iPitchTransition = .1

iLoudnessA = 0
iLoudnessB = p4

iPitchA = cpspch ( p5 ) * octave ( giDetune )
iPitchB = cpspch ( p6 ) * octave ( giDetune )

kLoudness linsegr iLoudnessA, iLoudnessTransition, iLoudnessB, iLoudnessTransition, 0
kPitch linseg iPitchA, iPitchTransition, iPitchB

aNote poscil kLoudness, kPitch, 2

outs aNote, aNote

endin
