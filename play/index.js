import Emitter from 'events';
import score from './score.js';
import wave from './wave.js';

export const Play = function Oscilla ( contrato ) {

contrato .output = new Emitter ();

return function oscilla ( participant, scenarist, cue, blooper ) {

scenarist .scenario ( {

name: 'oscilla',
cast: [ score, wave ],
setting: {

prompt: '\n?oscilla\n... ',
contrato: contrato

},
establish: true

} )
.then ( () => {

scenarist .display = 'oscilla';

cue ();

} )
.catch ( ( error ) => {

blooper ( error );

} );

};

};
