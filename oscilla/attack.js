import { instruments } from './instruments.js';

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function attack ( note, legato ) {

const oscilla = this;

if ( !oscilla .key [ note ] || oscilla .key [ note ] .attacked )
return;

oscilla .tune ( note );

for ( const partial of oscilla .partials ) {

for ( const instrument of instruments ) {

const { synthesizer, parameter, amplitude, sustain, attack, decay } = instrument;

partial [ note ] [ synthesizer ] [ parameter ]
.linearRampToValueAtTime (
partial .attributes [ amplitude ] .value,
oscilla .currentTime + partial .attributes [ attack ] .value
);

partial [ note ] [ synthesizer ] [ parameter ]
.linearRampToValueAtTime (
partial .attributes [ amplitude ] .value * partial .attributes [ sustain ] .value,
oscilla .currentTime + partial .attributes [ attack ] .value + partial .attributes [ decay ] .value
);

}

/*
partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value,
oscilla .currentTime + partial .attributes .attack .value
);

partial [ note ] .amplifier .offset
.linearRampToValueAtTime (
partial .attributes .loudness .value * partial .attributes .sustain .value,
oscilla .currentTime + partial .attributes .attack .value + partial .attributes .decay .value
);
*/

}

oscilla .key [ note ] .attacked = true;

};
