export const character = {};

character .events = [ '#t', '#tune' ];
character .action = function action ( script, cue, blooper ) {

const { oscilla } = this;
const tuning = oscilla .tuning = oscilla .tuning || {};

tuning .steps = tuning .steps || 12;
tuning .keys = tuning .keys || `qasedrfjikolp;']` .split ( '' );
tuning .frequency = tuning .frequency || 440;
tuning .key = tuning .key || 'l';
tuning .pitch = tuning .pitch || tuning .keys .indexOf ( tuning .key );

const scale = tuning .scale = {};

for (
let first = tuning .frequency * 2 ** ( -tuning .pitch / tuning .steps ),
note = 0;
note < tuning .keys .length;
note++
) {

scale [ note ] = {};
scale [ note ] .key = tuning .keys [ note ];
scale [ note ] .pitch = tuning .keys .indexOf ( scale [ note ] .key );
scale [ note ] .frequency = first * 2 ** ( ( note + 1 ) / tuning .steps );

}

};
