sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

pyinit
pyruni "import oscilla"

giWave = 1
giAmplitude = .5

giSine ftgen 1, 0, 16384, 10, 1
giSquare ftgen 2, 0, 16384, 10, 1, 0 , .33, 0, .2 , 0, .14, 0 , .11, 0, .09
giSaw ftgen 3, 0, 16384, 10, 0, .2, 0, .4, 0, .6, 0, .8, 0, 1, 0, .8, 0, .6, 0, .4, 0,.2

instr 1

iFrequency cps2pch p4, 24

aSound poscil giAmplitude, iFrequency, giWave

outs aSound, aSound

endin

instr wave

giWave = p4

endin

instr amplitude

giAmplitude = p4

endin
