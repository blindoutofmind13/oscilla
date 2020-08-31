import { spawn } from 'child_process';

const encoding = 'utf8';

const play = {};
export default play;

play .establishment = function establishment () {

const setting = this;
const { contrato } = setting;

const engine = setting .engine = spawn ( 'csound', [ '-Lstdin', '-odac', 'oscilla.orc', 'oscilla.sco' ] );

engine .stdin .setEncoding ( encoding );
engine .stdout .setEncoding ( encoding );
 engine .stderr .setEncoding ( encoding );

contrato .output .on ( 'score', ( score ) => {

engine .stdin .write ( score .trim () + '\n' );

} );

process .on ( 'exit', () => {

engine .kill ();

} );

};
