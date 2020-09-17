export const establishment = function establishment () {

const setting = this;
setting .note = null;

const { action, keys, input } = setting;

keys .split ( '' ) .forEach ( ( key ) => {

action [ key ] = {

event: 'pitch',
action: key

};

} );

};

export const character = {};

character .events = [ 'pitch' ];
character .action = function action ( script, cue, blooper ) {

const setting = this;
const { keys } = setting;
const shift = -2;
let octave = 8;
let pitch = keys .indexOf ( script .action );

if ( pitch < 0 )
return;

pitch += shift;

if ( pitch < 0 ) {

octave--;
pitch += 12;

}

pitch = ( pitch / 100 ) + octave;

if ( script .details === 'off' && setting .note === pitch ) {

setting .note = null;

cue ( 's -1 0 0' );

}

else if ( script .details === 'on' ) {

console .log ( pitch );

setting .note = pitch;

cue ( `s 1 0 -1 ${ pitch }\n` );

}

};
