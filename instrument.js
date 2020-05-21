export const establishment = function establishment () {

const setting = this;

setting .instrument = 'carrier';
setting .instruments = {};

let instrument = setting .instruments [ setting .instrument ] = {};
instrument .attack = 'attack';
instrument .decay = 'decay';
instrument .sustain = 'sustain';
instrument .release = 'release';

instrument = setting .instruments [ 'am' ] = {};
instrument .attack = 'amAttack';
instrument .decay = 'amDecay';
instrument .sustain = 'amSustain';
instrument .release = 'amRelease';

};

export const characters = {};
characters .events = [ 'instrument' ];
characters .cast = ',./';
characters .action = function action ( event ) {

const setting = this;

if ( event .scene .split ( ':' ) [ 1 ] === 'on' )
return;

switch ( event .character ) {

case ',': setting .instrument = 'carrier';
break;
case '.': setting .instrument = 'am';

}

};
