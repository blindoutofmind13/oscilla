export const character = {};

character .events = [ 'wave' ];
character .action = function wave ( script, cue, blooper ) {

const { keyboard, instrument } = this;

if ( script .details !== 'off' || keyboard .wave .indexOf ( script .action ) < 0 )
return;

instrument .wave .assign ( '=', parseInt ( script .action ) );

cue ();

};
