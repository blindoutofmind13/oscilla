export const character = {};

character .events = [ '#g', 'graph' ];
character .action = function action ( script, cue, blooper ) {

cue ( `

node create note Oscillator
parameter set note frequency 440 0

node create loudness Gain
parameter set loudness gain 0 0

node connect note loudness

node destination loudness

node start note

keyboard map l keydown parameter set note frequency 220 0
keyboard map l keydown parameter set loudness gain .1 0

keyboard map l keyup parameter set loudness gain 0 0

` );

};
