const Context = window .AudioContext || window .WebkitAudioContext;

export const establishment = function establishment () {

const setting = this;
const { scenarist } = setting;

const oscilla = setting .oscilla = setting .oscilla || {};
oscilla .context = new Context ();
oscilla .graph = {};

scenarist .scenario ( {

parent: 'oscilla',
name: 'engine',
paths: [

'/oscilla/engine/node.js',
'/oscilla/engine/parameter.js',
'/oscilla/engine/graph.js'

],
establish: true

} );

};
