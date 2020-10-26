const path = '/oscilla/csound/synth';

export const establishment = function establishment () {

const setting = this;
const { scenarist } = setting;

scenarist .scenario ( {

parent: 'oscilla',
name: 'synth',
paths: [

`${ path }/instrument.js`,
`${ path }/pitch.js`,
`${ path }/detune.js`,
`${ path }/envelope.js`,
`${ path }/wave.js`

],

setting: {

keyboard: {

pitch: "qasedrfjikolp;']",
detune: 'gh',
wave: '1234567',
envelope: 'zZxXcCvVbBmM'

}

},

establish: true

} )
.then ( () => {

scenarist .play ( {

event: 'keyboard'

} );

} );

};
