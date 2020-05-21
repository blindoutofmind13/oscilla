export const setting = {};

export const characters = {};
characters .events = [ 'detune', 'octave' ];
characters .cast = 'ghGH';
characters .action = function action ( event ) {

const setting = this;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case 'H':
case 'h':
case 'high':
case 'up':

setting .oscilla .set ( {

detune: event .character === 'H' ? 1 / setting .keys .length : 1

} );
//setting .oscilla .detune ( 1 );

break;
case 'G':
case 'g':
case 'low':
case 'down':

setting .oscilla .set ( {

detune: event .character === 'G' ? -1 / setting .keys .length : -1

} );
//setting .oscilla .detune ( -1 );

}

};
