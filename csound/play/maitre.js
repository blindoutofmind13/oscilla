export const establishment = function establishment () {

const setting = this;

setting .play = 'oscilla.js';

};

export const character = {};
character .events = [ '#maitre', 'maitre' ];
character .action = function action ( script, cue, blooper ) {

const { play } = this;

switch ( script .action ) {

case '#ready':

cue ( `venue produce ${ play }` );

break;

case '#venue':

cue ( `contrato start ${ play }` );

break;

case '#stamp':

cue ( `contrato play ${ script .details }\n` );

break;

default:

cue ();

}

};
