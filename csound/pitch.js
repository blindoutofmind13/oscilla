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

cue ( 's -1.1 0 0' );

}

else if ( script .details === 'on' ) {

instrument .previousPitch .value = setting .note .pitch;
instrument .previousDetune .value = setting .note .detune;
instrument .pitch .value = pitch;
instrument .pitchSustain .value = pitch;

setting .note .pitch = pitch;

const score = `
s -1.1 0 0
s 1.1 0 -1 ${ Object .values ( instrument ) .map ( ( attribute ) => {

return attribute .value;

} ) .join ( ' ' ) }
`;

console .log ( score );

cue ( score );

}

};
