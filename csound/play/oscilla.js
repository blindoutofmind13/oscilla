import Emitter from 'events';
import score from './score.js';

export const Play = function Oscilla ( contrato ) {

contrato .output = new Emitter ();

return function oscilla ( participant, scenarist, cue, blooper ) {

const teatro = this;

scenarist .scenario ( {

name: 'oscilla',
cast: [ score ],
setting: {

teatro: teatro,
prompt: '#oscilla',
contrato: contrato

},
establish: true

} )
.then ( () => {

scenarist .display = 'oscilla';

cue ( '#oscilla #ready' );

} )
.catch ( ( error ) => {

blooper ( error );

} );

};

};
