import { Attribute } from './attribute.js';

export const Instrument = function Instrument () {

const instrument = this;

instrument .control = 0;
instrument .attributes = {};

};

Instrument .prototype .attribute = function attribute ( key, parameters ) {

const instrument = this;

const attribute = instrument .attributes [ key ] = instrument .attributes [ key ] || new Attribute ( ++instrument .control );

if ( typeof parameters === 'object' ) {

Object .assign ( attribute, parameters );

attribute .assign ( '=', parameters .offset );

}

return attribute;

};

Instrument .prototype .controller = function controller ( key, value ) {

const instrument = this;
const attribute = instrument .attributes [ key ];

if ( attribute )
return `${ attribute .control } ${ value !== undefined ? value : attribute .value }`;

};
