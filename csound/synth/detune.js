export const character = {};

character .events = [ 'detune' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { instrument } = this;

switch ( script .action ) {

case 'g':
instrument .detune .value--;

break;

case 'h':
instrument .detune .value++;

}

cue ( `
s 1.1 0 -1 ${ instrument .detune .control } ${ instrument .detune .value }
` );

};
