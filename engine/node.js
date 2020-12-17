export const character = {};

character .events = [ '#n', '#node' ];
character .action = function action ( script, cue, blooper ) {

const { oscilla } = this;

switch ( script .action ) {

case '#c':
case '#create':

( ( [ node, type ] ) => {

oscilla .graph [ node ] = oscilla .context [ 'create' + type ] ();

} ) ( script .details );

break;

case '#o':
case '#connect':

( ( [ node, destination, parameter ] ) => {

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
