sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

instr 1

iP = 4

#include "envelope.orc"

iWave = $P

note:

aNote poscil kLoudness, kPitch, -1, iTied * -1

outs aNote, aNote

prints "#end\n"

endin
