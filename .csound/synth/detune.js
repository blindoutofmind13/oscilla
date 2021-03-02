export const character = {};

character .events = [ 'detune' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { instrument } = this;
const attribute = instrument .attribute ( 'detune' );

switch ( script .action ) {

case 'g':
attribute .assign ( '+', -1 );

break;

case 'h':
attribute .assign ( '+', 1 );

}

cue ( `
s 1.1 0 -1 ${ instrument .controller ( 'detune' ) } 0
` );

};
