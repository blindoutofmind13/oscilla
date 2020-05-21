export const establishment = function establishment () {

const setting = this;

setting .instrument = 'carrier';
setting .instruments = {};

setting .instruments .carrier = {};
setting .instruments .am = {};
setting .instruments .fm = {};

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
break;
case '/': setting .instrument = 'fm';

}

};
