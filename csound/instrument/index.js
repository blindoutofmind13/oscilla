import { Attribute } from './attribute.js';

export const Instrument = function Instrument () {

const instrument = this;

instrument .controller = 0;

};

Instrument .prototype .attribute = function attribute ( key, parameters ) {

const instrument = this;

instrument [ key ] = new Attribute ( Object .assign ( parameters, {

control: ++instrument .controller

} ) );

};
