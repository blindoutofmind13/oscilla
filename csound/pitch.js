export const establishment = function establishment () {

const setting = this;
setting .note = 0;

};

export const character = {};

character .events = [ 'pitch' ];
character .action = function action ( script, cue, blooper ) {

const setting = this;
const { keyboard } = setting;
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

if ( script .details === 'off' && setting .note === pitch ) {

setting .note = 0;

cue ( 's -1.1 0 0' );

}

else if ( script .details === 'on' ) {

const previousPitch = setting .note;
setting .note = pitch;

cue ( `
s -1.1 0 0
s 1.1 0 -1 .1 ${ previousPitch } ${ pitch }\n
` );

}

};
