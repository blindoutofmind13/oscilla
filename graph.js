export const events = [ '#g', '#graph' ];
export const script = {};

script [ '.n' ] = script [ '.node' ] = function node ( event, action, type ) {

const scenario = this;
const { context } = scenario .setting;
let answers = [];
let prototype = context;

while ( prototype = Object .getPrototypeOf ( prototype ) )
answers = answers .concat ( Object .getOwnPropertyNames ( prototype ) );

answers = answers .sort ()
.filter ( factory => factory .startsWith ( 'create' ) )
.map ( factory => {

factory = factory .substring ( 'create' .length );

return {

label: factory,
attributes: {

type: 'radio',
name: 'node-name',
value: factory

}

};

} );

scenario .play ( '#bot', '.prompt', `${ event } ${ action }`, 'Create a New Audio Node?', ... answers );

};
