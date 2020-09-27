sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giSine ftgen 1, 0, 65536, 10, 1
giSquare ftgen 2, 0, 16384, 10, 1, 0 , .33, 0, .2 , 0, .14, 0 , .11, 0, .09
giSaw ftgen 3, 0, 16384, 10, 0, .2, 0, .4, 0, .6, 0, .8, 0, 1, 0, .8, 0, .6, 0, .4, 0,.2
/*
#include "../orc/timbre.orc"

$TIMBRE(i'Detune'0)

#include "../orc/moog.orc"
*/

instr 1

iLoudness = p4
iLAttack = p5
iLDecay = p6
iLSustain = p7
iLRelease = p8

iDetune = p9
iPitch = cpspch ( p10 ) * octave ( iDetune )
iPAttack = p11
iPDecay = p12
iPSustain = cpspch ( p13 ) * octave ( iDetune )
iPPreviousDetune = p14
iPPrevious = cpspch ( p15 ) * octave ( iDetune )

iWave = p16

if ( iLAttack > 0 ) then

kLoudness linsegr 0, iLAttack, iLoudness, iLDecay, iLSustain, iLRelease, 0
kPitch linseg iPPrevious, iPAttack, iPitch, iPDecay, iPSustain

else

kLoudness = iLoudness
kPitch = iPitch

endif

aNote vco2 kLoudness, kPitch, iWave

outs aNote, aNote

endin
