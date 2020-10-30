iLoudnessA = $P
iLoudnessS = $P

iDetune = $P
iDetuneA = $P
iDetuneR = $P
iPitch = $P
iPitch = cpspch ( iPitch ) * octave ( iDetune )

iAttack = $P
if ( iAttack == 0 ) then

iAttack = .00000001

endif

iDecay = $P
iRelease = $P

iTied tival

tigoto envelope
if ( iTied == 1 ) kgoto envelope

kLoudness init 0
kPitch init iPitch

envelope:

prints "#envelope"

kLoudness linsegr i ( kLoudness ), iAttack, iLoudnessA, iDecay, iLoudnessS, iRelease, 0

kPitch linsegr i ( kPitch ), iAttack, iPitch * octave ( iDetuneA ), iDecay, iPitch, iRelease, iPitch * octave ( iDetuneR )

igoto note
kgoto note
