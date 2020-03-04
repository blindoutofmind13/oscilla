export const character = {};

character .cast = 'zxcvbn';
character .action = function action ( event ) {

const setting = this;
const { oscilla } = this;

if ( event .type === 'keyup' ) {
switch ( event .key ) {

case 'z': setting .adsr = 'attack';

break;
case 'x': setting .adsr = 'decay';

break;
case 'c': setting .adsr = 'sustain';

break;
case 'v': setting .adsr = 'release';

break;
default:

if ( isNaN ( oscilla [ setting .adsr ] ) )
return;

const value = event .key === 'b' ? -5 : 5;

oscilla [ setting .adsr ] = (
parseInt (
oscilla [ setting .adsr ] * 100
) + value
) / 100;

console .log ( setting .adsr, oscilla [ setting .adsr ] );

}

console .log ( setting .adsr );

}

};
