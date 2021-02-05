export const events = [ '#n', '#node' ];
export const action = {};

action [ '.c' ] = action [ '.create' ] = function create ( event, action, ... details ) {

const { oscilla } = this;

switch ( details .length ) {

case 0:

Object .keys ( oscilla .context )
.filter ( property => typeof property === 'string' ? property .startsWith ( 'create' ) : false )
.forEach ( type => {

const radio = document .createElement ( 'button' );

radio .type = 'button';
radio .onclick = () => oscilla .context [ factory ] ();

} );

break;

default:

const [ node, type ] = details;

const node = document .createElement ( 'section' );

oscilla .graph [ node ] = oscilla .context [ 'create' + type ] ();

}

};

action [ '.o' ] = action [ '.connect' ] = function connect ( event, action, ... details ) {

const { oscilla } = this;
const [ node, destination, parameter ] = details;

oscilla .graph [ node ] .connect (
destination === '#destination' ? oscilla .graph [ node ] .connect ( oscilla .context .destination ) :
!parameter ? oscilla .graph [ destination ] : oscilla .graph [ destination ] [ parameter ]
);

} ) ( script .details );

break;

case '#s':
case '#start':

( ( [ node ] ) => {

oscilla .graph [ node ] .start ();

} ) ( script .details );

break;

}

cue ();

};
