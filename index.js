import Scenarist from '/scenarist/module/scenarist.mjs';
import tune from './tune.js';
import note from './note.js';

const Context = window .AudioContext || window .WebkitAudioContext;

window .onload = () => {

const $ = Scenarist ( {} );

$ ( 'page', document );
$ ( tune, 'tune' );
$ ( 'noteOn', $ .branch (), 'on', 'keydown' );
$ ( 'noteOff', $ .branch (), 'off', 'keyup' );

$ ( 'tune', `qasedrfjikolp;']`, 'l' );

$ ( 'noteOn', note .on, ... $ ( 'tuning', 'scale' ) );
$ ( 'noteOff', note .off, ... $ ( 'tuning', 'scale' ) );

$ ( 'noteOff', '=', $ => {

$ = $ .Scenario;

$ ( 'engine', new Context () );
$ ( 'note', {} );
$ ( 'loudness', {} );

$ ( 'tuning', 'scale', 'forEach', key => {

$ ( 'loudness', key, $ ( 'engine', 'createGain' ) );
$ ( 'loudness', key, 'gain', 'setValueAtTime', .1, $ ( 'engine', 'currentTime' ) );

$ ( 'loudness', key, 'connect', $ ( 'engine', 'destination' ) );

} );

} );

document .onkeydown = document .onkeyup = ( { key, type } ) => $ ( type, key );

};
