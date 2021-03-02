const note = {};
export default note;

const on = note .on = {};
export const off = note .off = {};

on .scenaristable = off .scenaristable = true;
on .enumerable = off .enumerable = true;

on .value = ( $, key ) => {

$ = $ .Scenario;

if ( $ ( 'note', key ) !== undefined )
return;

$ ( 'note', key, $ ( 'engine', 'createOscillator' ) );
$ ( 'note', key, 'detune', 'setValueAtTime', $ ( 'tuning', 'detune', key ), $ ( 'engine', 'currentTime' ) );
$ ( 'note', key, 'connect', $ ( 'loudness', key ) );
$ ( 'note', key, 'start' );

};

off .value = ( $, key ) => {

$ = $ .Scenario;

$ ( 'note', key, 'stop' );
$ ( 'note', {

configurable: true,
writable: true,
value: undefined

}, key );

};
