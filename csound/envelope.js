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
attributes .push ( 'loudness' );

break;

case 'x':
case 'X':
attributes .push ( 'loudnessAttack' );
attributes .push ( 'pitchAttack' );

break;

case 'c':
case 'C':
attributes .push ( 'loudnessDecay' );
attributes .push ( 'pitchDecay' );

break;

case 'v':
case 'V':
attributes .push ( 'loudnessSustain' );

break;

case 'b':
case 'B':
attributes .push ( 'loudnessRelease' );

break;

case 'm':
case 'M':
attributes = attributes .concat ( [

'loudnessAttack',
'loudnessDecay',
'loudnessRelease',
'pitchAttack',
'pitchDecay'

] );

break;

default:
return;

}

attributes .forEach ( ( attribute ) => {

instrument [ attribute ] .assign ( '+', script .action .charCodeAt ( 0 ) >= 97 ? 1 : -1 );

} );

cue ();

};
