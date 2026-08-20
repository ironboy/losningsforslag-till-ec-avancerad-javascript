/*
  Exercise 2: Russian dolls (Ryska dockor)

  Demo file - the class lives in ./02-russian-doll-classes/.
*/

import RussianDoll from './02-russian-doll-classes/RussianDoll.js';

const big = new RussianDoll(10);
const medium = new RussianDoll(6);
const small = new RussianDoll(3);
const tiny = new RussianDoll(1);

big.putInsideMe(medium);
// big is occupied now, so these two travel further in on their own.
big.putInsideMe(small);
big.putInsideMe(tiny);

console.log(big.allDollsInsideMe().map(doll => doll.size));    // [ 6, 3, 1 ]
console.log(medium.allDollsInsideMe().map(doll => doll.size)); // [ 3, 1 ]

// A doll that is already nested cannot be moved into a third doll.
const other = new RussianDoll(8);
try {
  other.putInsideMe(medium);
} catch (error) {
  console.log('Error:', error.message);
}

// Too big to fit.
try {
  small.putInsideMe(new RussianDoll(5));
} catch (error) {
  console.log('Error:', error.message);
}

// Strings are rejected.
try {
  big.putInsideMe('a small doll');
} catch (error) {
  console.log('Error:', error.message);
}

// Unstack one level.
const removed = big.takeOutOfMe();
console.log(`Took out size ${removed.size}, big now holds:`, big.allDollsInsideMe());
