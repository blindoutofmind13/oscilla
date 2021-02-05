export const events = [ '#d', '#design' ];
export const script = {};

script [ '.c' ] = script [ '.create' ] = async function create ( event, action, name ) {

const scenario = this;
const oscilla = scenario .setting;
const { scenarist } = oscilla;

try {

oscilla .design .insert ( name, scenarist .start ( {

signature: name,
scenes: await Promise .all ( [

'bot',
'graph'

] .map ( path => import ( `./${ path }.js` ) ) ),
setting: {

design: name,
context: oscilla .context

}

} ) )
.play ( '#graph', '.node' );

} catch ( error ) {

console .error ( error );

scenario .play ( '#bot', '.prompt', `${ event } ${ action }`, 'Create a New Design?', {

label: 'Design Name',
attributes: {

type: 'text',
name: 'design-name',
placeholder: 'Name your Design. The Name must be unique among other Designs of your Oscilla.'

}

} );

}

};
