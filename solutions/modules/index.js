/*
  Runs every demo in this area, in exercise order. See classes-oop/index.js for
  why the imports are dynamic and awaited.

  Exercise 4 is missing on purpose: it writes to the document and only runs in
  a browser. Serve this folder and open 04-browser/ instead - see README.md.
*/

console.log('--- The toolbox (Verktygslådan) ---');
await import('./01-toolbox/main.js');

console.log('\n--- The main thing (Huvudsaken) ---');
await import('./02-bank-account/main.js');

console.log('\n--- The candy shop in modules (Godisbutiken flyttar in i moduler) ---');
await import('./03-candy-shop/main.js');
