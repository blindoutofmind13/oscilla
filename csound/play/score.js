import { spawn } from 'child_process';

const encoding = 'utf8';

const play = {};
export default play;

play .establishment = function establishment () {

const setting = this;
const { teatro, contrato } = setting;

const synthesizer = setting .synthesizer = spawn ( 'csound', [ '-Lstdin', '-odac', 'oscilla.orc', 'oscilla.sco' ] );

synthesizer .stdin .setEncoding ( encoding );
synthesizer .stdout .setEncoding ( encoding );
 synthesizer .stderr .setEncoding ( encoding );

contrato .output .on ( 'score', ( score ) => {

synthesizer .stdin .write ( score .trim () + '\n' );

} );

teatro .on ( 'close', () => {

synthesizer .kill ();

} );

};
