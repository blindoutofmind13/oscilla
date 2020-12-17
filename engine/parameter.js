export const character = {};

character .events = [ '#p', '#parameter' ];
character .action = function action ( script, cue, blooper ) {

const { oscilla } = this;

switch ( script .action ) {

case '#s':
case '#set':

( ( [ node, parameter, value, delay ] ) => {

value = parseFloat ( value ) || 0;
delay = parseFloat ( delay ) || 0;

oscilla .graph [ node ] [ parameter ]
.cancelScheduledValues ( oscilla .context .currentTime );

oscilla .graph [ node ] [ parameter ]
.setValueAtTime ( value, oscilla .context .currentTime + delay );

} ) ( script .details );

}

cue ();

};
