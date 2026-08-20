/*
  Runs every demo in this area, in exercise order.

  Note the dynamic `await import(...)` instead of a plain `import './x.js'`.
  A static import is hoisted and evaluated before any other code in this file,
  and modules that use top-level await do not block their siblings - so the
  output from the promise demos would interleave with everything else. Awaiting
  a dynamic import runs the files strictly one at a time.

  Nothing is imported by name here: we only want the side effect of running
  each file.
*/

console.log('--- Rockband (Musician + Band) ---');
await import('./01-musician.js');

console.log('\n--- Russian dolls (Ryska dockor) ---');
await import('./02-russian-doll.js');

console.log('\n--- Housing (Bostäder) ---');
await import('./03-housing.js');
