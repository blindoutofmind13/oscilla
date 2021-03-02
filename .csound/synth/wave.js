export const character = {};

character .events = [ 'wave' ];
character .action = function wave ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { keyboard, instrument } = this;
const attribute = instrument .attribute ( 'wave' );
let wave = keyboard .wave .indexOf ( script .action );

console .log ( wave );

if ( wave < 0 )
return;

wave--;

attribute .assign ( '=', wave );

cue ( `
s 1.1 0 -1 ${ instrument .controller ( 'wave' ) } 0
` );

};
