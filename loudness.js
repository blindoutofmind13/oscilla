export const establishment = function establishment () {

const setting = this;

setting .instruments .carrier
.loudness = 'loudness';

setting .instruments .am
.loudness = 'amFrequency';

setting .instruments .fm
.loudness = 'fmFrequency';

};

export const characters = {};
characters .events = [ 'loudness' ];
characters .cast = '-=';
characters .action = function action ( event ) {

const setting = this;
const { partial, oscilla } = setting;
let value;

switch ( event .character ) {

case '=':
case 'up':

//setting .oscilla .loudness ( 1 );
value = 1;

break;
case '-':
case 'down':

//setting .oscilla .loudness ( -1 );
value = -1;

}

const instrument = setting .instruments [ setting .instrument ];

if ( !instrument )
return;

const attribute = {};
attribute [ instrument .loudness ] = value;
oscilla .set ( attribute );

};
