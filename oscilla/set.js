export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function set ( attributes ) {

if ( typeof attributes !== 'object' )
return;

const oscilla = this;

for ( const partial of oscilla .partials ) {

for ( const name in attributes ) {

const attribute = partial .attributes [ name ];

if ( !attribute )
break;

attribute .offset += attributes [ name ];
attribute .offset = attribute .offset < attribute .min ? attribute .min :
attribute .offset > attribute .max ? attribute .max : attribute .offset;
attribute .value = attribute .coefficient * attribute .offset;

partial .dispatchEvent (
new CustomEvent ( name .toLowerCase (), {

detail: partial

} )
);

}

}

};
