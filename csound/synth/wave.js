export const character = {};

character .events = [ 'wave' ];
character .action = function wave ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { keyboard, instrument } = this;
let wave = keyboard .wave .indexOf ( script .action );

console .log ( wave );

if ( wave < 0 )
return;

wave--;

instrument .wave .assign ( '=', wave );

cue ( `
s 1.1 0 -1 ${ instrument .wave .control } ${ instrument .wave .value } 0
` );

};
