export const character = {};

character .events = [ 'wave' ];
character .action = function wave ( script, cue, blooper ) {

if ( script .details !== 'off' )
return;

const { keyboard, instrument } = this;
let wave;

switch ( script .action ) {

case '1':
wave = 0;

break;

case '2':
case 'triangle':
wave = 12;

break;

case '3':
case 'square':
wave = 10;

break;

case '4':
case 'integratedSawtooth':
wave = 8;

break;

case '5':
case 'pulse':
wave = 6;

break;

case '6':
case 'sawtoothTriangleRamp':
wave = 4;

break;

case '7':
case 'squarePWM':
wave = 2;

break;

default:
return;

}

instrument .wave .assign ( '=', wave );

cue ();

};
