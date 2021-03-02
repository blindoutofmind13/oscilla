const write = ( instance, delay ) => {

return `
s 1${ instance } ${ delay } -1 ${ instrument .controller ( 'loudness' ) } ${ instrument .controller ( 'loudnessSustain' ) } ${ instrument .controller ( 'pitch' ) } ${
instrument .controller ( 'attack' )
} 0
`;

};

export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function score () {

const instrument = this;

instrument .book .push (
write (
);

return write ( '1.1', 0 );

};
