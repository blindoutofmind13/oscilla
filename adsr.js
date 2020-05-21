export const establishment = function establishment () {

const setting = this;

let instrument = setting .instruments [ 'carrier' ];
instrument .attack = 'attack';
instrument .decay = 'decay';
instrument .sustain = 'sustain';
instrument .release = 'release';

instrument = setting .instruments [ 'am' ];
instrument .attack = 'amAttack';
instrument .decay = 'amDecay';
instrument .sustain = 'amSustain';
instrument .release = 'amRelease';

instrument = setting .instruments [ 'fm' ];
instrument .attack = 'fmAttack';
instrument .decay = 'fmDecay';
instrument .sustain = 'fmSustain';
instrument .release = 'fmRelease';

};

const increment = 'zxcv';

export const characters = {};

characters .events = [ 'adsr', 'envelope' ];
characters .cast = increment + increment .toUpperCase ();
characters .action = function action ( event ) {

const setting = this;
const { oscilla } = this;
let name;

switch ( event .character ) {

case 'z':
case 'Z':

name = 'attack';

break;
case 'x':
case 'X':

name = 'decay';

break;
case 'c':
case 'C':

name = 'sustain';

break;
case 'v':
case 'V':

name = 'release';

}

const instrument = setting .instruments [ setting .instrument ];

if ( !instrument )
return;

const attribute = {};
attribute [ instrument [ name ] ] = increment .includes ( event .character ) ? 1 : -1;

oscilla .set ( attribute );

};
