sr = 44100
ksmps = 32
nchnls = 2
0dbfs = 1

giP = 4

instr 1

iWave = p15

iTied tival

tigoto attack

if ( iTied == 1 ) kgoto attack

kLoudness init 0
kPitch init 0

attack:

prints "#attack"

kLoudness linsegr i ( kLoudness ), iLoudnessA, iLoudness, iLoudnessD, iLoudnessS, iLoudnessR, 0

kPitch linsegr i ( kPitch ), iPitchA, iPitch, iPitchD, iPitchS

igoto note
kgoto note

sustain:

prints "#sustain"

kLoudness linsegr i ( kLoudness ), iLoudnessA, iLoudness, iLoudnessD, iLoudnessS, iLoudnessR, 0

igoto note
kgoto note

note:

;aNote vco2 kLoudness, kPitch, iWave
aNote poscil kLoudness, kPitch, -1, iTied * -1

outs aNote, aNote

prints "#end\n"

endin
