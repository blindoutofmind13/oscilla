import { spawn } from 'child_process';

const encoding = 'utf8';

const play = {};
export default play;

play .establishment = function establishment () {

const setting = this;
const { teatro, contrato } = setting;

const synthesizer = setting .synthesizer = spawn ( 'csound', [ '-Lstdin', '-odac', '../orc/oscilla.orc', '../sco/blank.sco' ] );

synthesizer .stdin .setEncoding ( encoding );
synthesizer .stdout .setEncoding ( encoding );
 synthesizer .stderr .setEncoding ( encoding );

/*
synthesizer .stdout .pipe ( process .stdout );
synthesizer .stderr .pipe ( process .stderr );
*/

[ 'data', 'close', 'end', 'error' ] .forEach ( ( event ) => {

synthesizer .stderr .on ( event, ( error ) => {

//console .error ( '#synthesizer', `#${ event }`, error );

} );

} );

contrato .output .on ( 'score', ( score ) => {

synthesizer .stdin .write ( score .trim () + '\n' );

} );

teatro .on ( 'close', () => {

synthesizer .kill ();

console .error ( '#synthesizer #close' );

} );

};

const character = play .character = {};

character .events = [ 's', '#s', 'score', '#score' ];
character .action = function action ( script, cue, blooper ) {

const { contrato, synthesizer } = this;
const score = `i ${ script .action } ${ script .details .trim () }\n`;

contrato .output .emit ( 'score', score );
cue ( score );

};