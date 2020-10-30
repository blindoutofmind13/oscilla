import { Instrument } from '../instrument/index.js';

export const establishment = function establishment () {

const setting = this;
const instrument = setting .instrument = new Instrument ();

instrument .attribute ( 'loudness', {

offset: 32,
min: 0,
max: 87,
coefficient: 1 / 87

} );

instrument .attribute ( 'pitch', {

offset: 0,
coefficient: 1,
min: 0,
max: 11

} );

instrument .attribute ( 'detune', {

offset: 0,
coefficient: 1,
min: -5,
max: 5

} );

instrument .attribute ( 'transition', {

offset: 16

} );

instrument .attribute ( 'wave', {

offset: -1,
coefficient: 1,
min: -1

} );

};
