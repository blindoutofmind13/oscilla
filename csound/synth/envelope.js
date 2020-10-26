export const character = {};

character .events = [ 'envelope' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { instrument } = this;
let attributes = [];

switch ( script .action ) {

case 'z':
case 'Z':
attributes .push ( 'attack' );

break;

case 'x':
case 'X':
attributes .push ( 'decay' );

break;

case 'c':
case 'C':
attributes .push ( 'release' );

break;

case 'v':
case 'V':
attributes = attributes .concat ( [

'attack',
'decay',
'release'

] );

break;

default:
cue ();

}

attributes .forEach ( ( attribute ) => {

instrument [ attribute ] .assign ( '+', script .action .charCodeAt ( 0 ) >= 97 ? 1 : -1 );

} );

cue ();

};
