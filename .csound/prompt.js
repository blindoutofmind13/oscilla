export const character = {};

character .events = [ '#oscilla', 'oscilla' ];
character .action = function action ( script, cue, blooper ) {

switch ( script .action ) {

case '#ready':

const { instrument } = this;
const score = `
s 1.1 0 -1 ${ Object .values ( instrument .attributes ) .map ( ( attribute ) => {

return attribute .control + ' ' + attribute .value;

} ) .join ( ' ' ) } ${ instrument .controller ( 'loudness', 0 ) } ${ instrument .controller ( 'loudnessSustain', 0 ) } 0
`;

cue ( score );

}

cue ();

};
