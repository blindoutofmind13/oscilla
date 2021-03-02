const tune = {};
export default tune;

tune .scenaristable = true;
tune .enumerable = true;
tune .value = ( $, event, scale, standard ) => {

scale = scale .split ( '' );
standard = scale .indexOf ( standard );

if ( standard < 0 )
return;

$ ( 'tuning', {} );
$ ( 'tuning', 'scale', scale );
$ ( 'tuning', 'detune', {} );

scale .map ( ( pitch, step ) => $ ( 'tuning', 'detune', step, 100 * ( step - standard ), pitch ) );

};
