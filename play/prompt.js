export const character = {};
character .events = [ '#maitre', 'maitre' ];
character .action = function action ( script, cue, blooper ) {

const { participant, argument } = script .details;

switch ( script .action ) {

case '#ready':

cue ( 'venue produce index.js' );

break;

case '#venue':

cue ( 'contrato start index.js' );

break;

case '#stamp':

cue ( `contrato play ${ argument }\n` );

break;

default:

cue ();

}

};
