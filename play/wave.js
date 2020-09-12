const play = {};
export default play;

const character = play .character = {};
character .events = [ 'wave', '#wave', '#w' ];
character .action = function action ( script, cue, blooper ) {

const { contrato } = this;
contrato .output .emit ( 'score', 'i 1 0 1 9.04' );

cue ();

};
