export const establishment = function establishment () {

const setting = this;
const { scenarist } = setting;

scenarist .scenario ( {

parent: 'oscilla',
name: 'engine',
paths: [

'/oscilla/engine/tune.js',
'/oscilla/engine/node.js',
'/oscilla/engine/parameter.js',
'/oscilla/engine/graph.js'

],
establish: true

} );

};
