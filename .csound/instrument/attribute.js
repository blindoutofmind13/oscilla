export const Attribute = function Attribute ( controller ) {

const attribute = this;

attribute .control = controller;

};

Attribute .prototype .value = 0;
Attribute .prototype .offset = 0;
Attribute .prototype .coefficient = 1 / 127;
Attribute .prototype .min = 0;
Attribute .prototype .max = 127;

Attribute .prototype .assign = function assign ( operator, value ) {

if ( isNaN ( value ) )
return;

const attribute = this;

switch ( operator ) {

case '=':
attribute .offset = value;

break;

case '+':
attribute .offset += value;

break;

case '-':
attribute .offset -= value;

break;

default:
return;

}

attribute .offset = attribute .offset < attribute .min ? attribute .min :
attribute .offset > attribute .max ? attribute .max : attribute .offset;

attribute .value = attribute .offset * attribute .coefficient;

};
