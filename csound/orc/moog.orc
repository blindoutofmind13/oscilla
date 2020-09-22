gkFilterQ init .5
gkFilterRate init .0002
gkVibratoFrequency init 5
gkVibratoAmplitude init .01

iAttackWaveform ftgen 1, 0, 8192, 1, "mandpluk.aiff", 0, 0, 0
iLoopingWaveform ftgen 2, 0, 256, 1, "impuls20.aiff", 0, 0, 0
iVibratoWaveform ftgen 3, 0, 256, 10, 1

instr 1

kPitch = cpspch ( p4 ) * octave ( giDetune )

aNote moog .15, kPitch, gkFilterQ, gkFilterRate, gkVibratoFrequency, gkVibratoAmplitude, 1, 2, 3

outs aNote, aNote

endin

$TIMBRE(k'FilterQ)
