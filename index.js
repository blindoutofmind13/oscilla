import Scenarist from '/scenarist/index.js';
import Cursor from '/cursor/index.js';

const Context = window .AudioContext || window .WebkitAudioContext;

window .onload = async () => {

const oscilla = {};

oscilla .context = new Context ();
oscilla .design = new Cursor ();

const scenarist = oscilla .scenarist = new Scenarist ();
const scenario = scenarist .start ( {

signature: 'oscilla',
scenes: await Promise .all ( [

'/botta/bot.js',
'./design.js'

] .map ( path => import ( path ) ) ),
setting: oscilla

} );

scenario .play ( '#design', '.create' );

};
