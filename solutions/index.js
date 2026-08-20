/*
  Runs all the solutions, area by area, in the order the topics are taught.
  Each area has an index.js of its own that runs its exercises in order.

  Nothing is imported by name - we only want the side effect of running the
  demo files. The imports are dynamic and awaited so that everything appears in
  order even though several files use top-level await; a plain static import
  would let the async ones run alongside the rest.

  Run with: node index.js
  Takes around 25 seconds and needs an internet connection for the promise
  exercises.
*/

console.log('===== 1. Klasser och OOP =====\n');
await import('./classes-oop/index.js');

console.log('\n\n===== 2. Arrow-funktioner och array-metoder =====\n');
await import('./arrow-functions-and-array-methods/index.js');

console.log('\n\n===== 3. Promises och async/await =====\n');
await import('./promises-async-await/index.js');

console.log('\n\n===== 4. Moduler =====\n');
await import('./modules/index.js');

console.log('\n\nKlart.');
