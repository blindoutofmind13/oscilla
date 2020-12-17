import { Scenarist } from '/scenarist/index.js';

window .onload = () => {

const scenarist = new Scenarist ();
scenarist .scenario ( {

name: 'oscilla',
paths: [

'/typist/output.js',
'/typist/stage.js',
'/typist/input.js',
'/typist/input/script.js',
'/typist/input/action.js',

'/oscilla/engine/index.js'

],
establish: true

} )
.then ( () => {

scenarist .display = 'engine';

} );

};
