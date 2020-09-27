import { Attribute } from './attribute.js';

export const establishment = function establishment () {

const setting = this;
const instrument = setting .instrument = {

loudness: new Attribute ( 63 ),
loudnessAttack: new Attribute ( 1 ),
loudnessDecay: new Attribute ( 1 ),
loudnessSustain: new Attribute ( 32 ),
loudnessRelease: new Attribute ( 1 ),

detune: new Attribute (),
pitch: new Attribute (),
pitchAttack: new Attribute ( 1 ),
pitchDecay: new Attribute ( 1 ),
pitchSustain: new Attribute (),
previousDetune: new Attribute (),
previousPitch: new Attribute (),

};

instrument .wave = new Attribute ();
instrument .wave .coefficient = 1;

};
