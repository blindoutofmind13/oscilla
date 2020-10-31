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

instrument .attack .assign ( '+', 1 );

score = `s 1.1 0 -1 ${ instrument .attack .control } ${ instrument .attack .value } 0`;

break;

case 'X':

instrument .attack .assign ( '-', 1 );

score = `s 1.1 0 -1 ${ instrument .attack .control } ${ instrument .attack .value } 0`;

break;

case 'c':

instrument .decay .assign ( '+', 1 );

score = `s 1.1 0 -1 ${ instrument .decay .control } ${ instrument .decay .value } 0`;

break;

case 'C':

instrument .decay .assign ( '-', 1 );

score = `s 1.1 0 -1 ${ instrument .decay .control } ${ instrument .decay .value } 0`;

break;

case 'v':

instrument .loudnessSustain .assign ( '+', 1 );

score = `s 1.1 0 -1 ${ instrument .loudnessSustain .control } ${ instrument .loudnessSustain .value } 0`;

break;

case 'V':

instrument .loudnessSustain .assign ( '-', 1 );

score = `s 1.1 0 -1 ${ instrument .loudnessSustain .control } ${ instrument .loudnessSustain .value } 0`;

break;

default:
return;

}

cue ( score );

};
