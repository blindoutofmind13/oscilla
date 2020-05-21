export const Partial = class Partial extends EventTarget {

constructor ( attributes ) {

super ();

const partial = this;

const defaults = partial .attributes = {};

defaults .wave = attributes .wave || 'sawtooth';
defaults .detune = {

min: -5,
max: 5,
coefficient: 1,
offset: 0,
value: attributes .detune || 0

};

[ 'loudness', 'sustain' ] .forEach ( ( name ) => {

defaults [ name ] = {};

defaults [ name ] .min = 0;
defaults [ name ] .max = 127;
defaults [ name ] .coefficient = 1 / 127;
defaults [ name ] .offset = 64;
defaults [ name ] .value = defaults [ name ] .offset * defaults [ name ] .coefficient;

} );

[ 

'attack', 'decay', 'release',
'amFrequency', 'amAttack', 'amDecay', 'amSustain', 'amRelease'

] .forEach ( ( name ) => {

defaults [ name ] = {};

defaults [ name ] .min = 0;
defaults [ name ] .max = 127;
defaults [ name ] .coefficient = 1 / 127;
defaults [ name ] .offset = 0;
defaults [ name ] .value = 0;

} );

defaults .amFrequency .coefficient = 100 / 127;
defaults .amSustain .coefficient = 100 / 127;

}

};

for ( const event of [

'wave',
'detune'

] ) {

Object .defineProperty ( Partial .prototype, 'on' + event, {

enumerable: true,
set: function set ( listener ) {

const partial = this;

partial .addEventListener ( event, listener, false );

}

} );

}
