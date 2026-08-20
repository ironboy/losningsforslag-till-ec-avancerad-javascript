/*
  Exercise 1: Rockband (Musician + Band)

  Demo file - the classes live in ./01-musician-classes/.
*/

import Musician from './01-musician-classes/Musician.js';
import Band from './01-musician-classes/Band.js';

const bjorn = new Musician('Björn', 'guitar', 42);
const lena = new Musician('Lena', 'drums', 35);

const stormvarning = new Band('Stormvarning');
const nattsudd = new Band('Nattsudd');

// Adding from the musician side...
bjorn.joinBand(stormvarning);
// ...and from the band side. Both give the same result on both objects.
nattsudd.hire(bjorn);
stormvarning.hire(lena);

console.log(bjorn.describe());          // Björn plays in Stormvarning, Nattsudd
console.log(stormvarning.describe());   // Stormvarning consists of Björn, Lena

// Removing works the same way from either side.
stormvarning.fire(bjorn);

console.log(bjorn.describe());          // Björn plays in Nattsudd
console.log(stormvarning.describe());   // Stormvarning consists of Lena

// Adding twice must not create duplicates.
lena.joinBand(stormvarning);
console.log(stormvarning.members.length); // still 1

// A wrong type is rejected instead of silently corrupting the arrays.
try {
  bjorn.joinBand('Stormvarning');
} catch (error) {
  console.log('Error:', error.message);
}
