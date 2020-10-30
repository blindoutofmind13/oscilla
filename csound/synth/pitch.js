const note = {

pitch: 0,
detune: 0

};

export const establishment = function establishment () {

const setting = this;
setting .note = note;

};

export const character = {};

character .events = [ 'pitch' ];
character .action = function action ( script, cue, blooper ) {

const setting = this;
const { keyboard, instrument } = setting;
const shift = -2;
let octave = 8;
let pitch = keyboard .pitch .indexOf ( script .action );

if ( pitch < 0 )
return;

pitch += shift;

if ( pitch < 0 ) {

octave--;
pitch += 12;

}

pitch = ( pitch / 100 ) + octave;

if ( script .details === 'off' && setting .note .pitch === pitch ) {

setting .note = note;

cue ( `s 1.1 0 -1 ${ instrument .loudness .control } 0 ${ instrument .pitch .control } 0 0` );

}

else if ( script .details === 'on' ) {

instrument .pitch .value = pitch;

setting .note .pitch = pitch;

const score = `
s 1.1 0 -1 ${ instrument .loudness .control } ${ instrument .loudness .value } ${ instrument .pitch .control } ${ instrument .pitch .value } 0
`;

//console .log ( score );

cue ( score );

}

};
