import { Scenarist } from '/oscilla/scenarist/index.js';
import { Oscilla } from '/oscilla/oscilla/index.js';

window .onload = () => {

const scenarist = new Scenarist ();

scenarist .write ( 'body', 'header' )
.write ( 'header', 'h1' )
.write ( 'header h1', 'a', {

href: 'https://github.com/teatro13',
target: '_blank'

}, 'teatro13' )
.write ( 'header h1', 'span', {}, ' / ' )
.write ( 'header h1', 'a', {

href: 'https://github.com/teatro13/oscilla',
target: '_blank'

}, 'oscilla' )
.write ( 'body', 'main', { id: 'scenario' } )
.write ( 'body', 'nav' );

scenarist .scenario ( {

name: 'carrier',
paths: [

'/oscilla/ascii.js',
//'/oscilla/midi.js',
'/oscilla/timbre.js',
'/oscilla/instrument.js',
'/oscilla/pitch/index.js',
'/oscilla/octave.js',
'/oscilla/wave.js',
'/oscilla/loudness.js',
'/oscilla/adsr.js'

],
establish: true

} );

scenarist .display = 'carrier';

/*
document .onkeydown = document .onkeyup = ( event ) => {

scenarist .play ( event );

};
*/

};
