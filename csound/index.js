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
'/typist/input/ws.js',
'/maitre/prompt.js',
'/typist/prompt.js',
'/oscilla/csound/synth/index.js'

],
setting: {

play: 'oscilla.js',
ws: {

scheme: 'ws',
host: 'localhost',
port: 1300,
target: 'ws'

}

},
establish: true

} )
.then ( () => {

scenarist .display = 'synth';

} );

};
