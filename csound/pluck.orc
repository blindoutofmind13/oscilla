sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giWave = 1
giLoudness = .1

giSine ftgen 1, 0, 16384, 10, 1
giSquare ftgen 2, 0, 16384, 10, 1, 0 , .33, 0, .2 , 0, .14, 0 , .11, 0, .09
giSaw ftgen 3, 0, 16384, 10, 0, .2, 0, .4, 0, .6, 0, .8, 0, 1, 0, .8, 0, .6, 0, .4, 0,.2

gifCyclicDecay = 0
giDecayMethod = 1
giParameter1 = .1
giParameter2 = 10

instr 13

iNotes = p4
iNote = 0
iNoteDelay = 0

while iNote < iNotes * 2 do

iNoteDuration = p ( 5 + iNote )
iNotePitch = p ( 6 + iNote )

event_i "i", "pluck", iNoteDelay, iNoteDuration, iNotePitch

iNoteDelay = iNoteDelay + iNoteDuration
iNote = iNote + 2

od

endin

instr pluck

kLoudness = giLoudness
iPitch cps2pch p4, 24
kPitch = iPitch

aNote pluck kLoudness, kPitch, iPitch, gifCyclicDecay, giDecayMethod, giParameter1, giParameter2

outs aNote, aNote

endin

instr wave

giWave = p4

endin

instr loudness

giLoudness = p4

endin
