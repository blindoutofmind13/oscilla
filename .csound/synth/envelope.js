export const character = {};

character .events = [ 'envelope' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { instrument } = this;
let key;
let assignment;

switch ( script .action ) {

case 'z':

key = 'loudness';
assignment = 1;

break;

case 'Z':

key = 'loudness';
assignment = -1;

break;

case 'x':

key = 'attack';
assignment = 1;

break;

case 'X':

key = 'attack';
assignment = -1;

break;

case 'c':

key = 'decay';
assignment = 1;

break;

case 'C':

key = 'decay';
assignment = -1;

break;

case 'v':

key = 'loudnessSustain';
assignment = 1;

break;

case 'V':

key = 'loudnessSustain';
assignment = -1;

break;

case 'b':

key = 'release';
assignment = 1;

break;

case 'B':

key = 'release';
assignment = -1;

break;

default:
return;

}

const attribute = instrument .attribute ( key );
attribute .assign ( '+', assignment );
const score = `s 1.1 0 -1 ${ instrument .controller ( key ) } 0`;

cue ( score );

};
