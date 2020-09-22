export const establishment = function establishment () {

const setting = this;
setting .detune = 0;

};

export const character = {};

character .events = [ 'detune' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const setting = this;

switch ( script .action ) {

case 'g':
setting .detune--;

break;

case 'h':
setting .detune++;

}

cue ( `s "Detune" 0 0 ${ setting .detune }\n` );

};
