import Emitter from 'events';
import score from './score.js';
import wave from './wave.js';

export const Play = function Oscilla ( contrato ) {

contrato .output = new Emitter ();

return function oscilla ( participant, scenarist, cue, blooper ) {

const teatro = this;

scenarist .scenario ( {

name: 'oscilla',
cast: [ score, wave ],
setting: {

teatro: teatro,
prompt: '\n?oscilla\n... ',
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
