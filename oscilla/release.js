import { instruments } from './instruments.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function release ( note, legato ) {

const oscilla = this;

if ( !oscilla .key [ note ] )
return;

for ( const partial of oscilla .partials ) {

for ( const instrument of instruments ) {

const { oscillator, synthesizer, parameter, amplitude, sustain, release } = instrument;

partial [ note ] [ synthesizer ] [ parameter ]
.cancelScheduledValues (
oscilla .currentTime + partial .attributes [ release ] .value
);

partial [ note ] [ synthesizer ] [ parameter ]
.linearRampToValueAtTime (
partial .attributes [ amplitude ] .value * partial .attributes [ sustain ] .value,
oscilla .currentTime
);

partial [ note ] [ synthesizer ] [ parameter ]
.linearRampToValueAtTime (
0,
oscilla .currentTime + partial .attributes [ release ] .value
);

partial [ note ] [ oscillator ]
.stop (
oscilla .currentTime + partial .attributes [ release ] .value
);

}

}

oscilla .key [ note ] .attacked = false;

};
