export const character = {};

character .events = [ '#p', 'parameter' ];
character .action = function action ( script, cue, blooper ) {

const { oscilla } = this;
let [ node, parameter, value, delay ] = script .details;
value = parseFloat ( value );
delay = parseFloat	 ( value );

switch ( script .action ) {

case '#s':
case 'set':

oscilla .graph [ node ] [ parameter ]
.cancelScheduledValues ( oscilla .context .currentTime );
oscilla .graph [ node ] [ parameter ]
.setValueAtTime ( value, oscilla .context .currentTime );

}

cue ();

};
