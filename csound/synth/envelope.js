export const character = {};

character .events = [ 'envelope' ];
character .action = function action ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { instrument } = this;
let score;

switch ( script .action ) {

case 'z':

instrument .loudness .assign ( '+', 1 );

score = `s 1.1 0 -1 ${ instrument .loudness .control } ${ instrument .loudness .value } 0`;

break;

case 'Z':

instrument .loudness .assign ( '-', 1 );

score = `s 1.1 0 -1 ${ instrument .loudness .control } ${ instrument .loudness .value } 0`;

break;

case 'x':

instrument .transition .assign ( '+', 1 );

score = `s 1.1 0 -1 ${ instrument .transition .control } ${ instrument .transition .value } 0`;

break;

case 'X':

instrument .transition .assign ( '-', 1 );

score = `s 1.1 0 -1 ${ instrument .transition .control } ${ instrument .transition .value } 0`;

break;

default:
return;

}

cue ( score );

};
