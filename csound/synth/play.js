const note = {

pitch: 0,
detune: 0

};

export const establishment = function establishment () {

const setting = this;
setting .note = note;

};

export const character = {};

character .events = [ 'play', '#play', 'pitch', '#pitch', '#p' ];
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

setting .note .pitch = 0;

//cue ( `s 1.1 0 -1 ${ instrument .controller ( 'loudness' ) } ${ instrument .controller ( 'loudnessSustain' ) } ${ instrument .controller ( 'release' ) } 0` );
cue ( 's 1.1 0 -1 -1' );

}

else if ( script .details === 'on' && setting .note .pitch !== pitch ) {

instrument .attributes .pitch .value = pitch;

setting .note .pitch = pitch;

const score = `
s 1.1 0 -1 ${ instrument .controller ( 'loudness' ) } ${ instrument .controller ( 'loudnessSustain' ) } ${ instrument .controller ( 'pitch' ) } ${
instrument .controller ( 'attack' )
} 0
`;

cue ( score );

}

};
