export const Score = function Score () {

const score = this;

score .sheet = [];

};

Score .prototype .line = function line ( note ) {

const start = Date .now ();
const score = this;

if ( score .sheet .length === 0 )
score .start = start;

score .sheet .push ( {

start: ( start - score .start ) * 1000,
note: note

} );

};
