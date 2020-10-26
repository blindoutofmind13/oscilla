import { Attribute } from './attribute.js';

export const establishment = function establishment () {

const setting = this;
const instrument = setting .instrument = {

loudnessA: new Attribute ( 64 ),
loudnessS: new Attribute ( 32 ),

detune: new Attribute (),
detuneA: new Attribute (),
detuneR: new Attribute (),
pitch: new Attribute (),

attack: new Attribute ( 0 ),
decay: new Attribute ( 0 ),
release: new Attribute ( 0 ),

};

instrument .wave = new Attribute ();
instrument .wave .coefficient = 1;

};
