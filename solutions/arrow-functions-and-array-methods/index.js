// Runs every demo in this area, in exercise order. See classes-oop/index.js
// for why the imports are dynamic and awaited.

console.log('--- The translation agency (Översättningsbyrån) ---');
await import('./01-translation-agency.js');

console.log('\n--- The candy shop (Godisbutiken) ---');
await import('./02-candy-shop.js');

console.log('\n--- The cash register (Kassaapparaten) ---');
await import('./03-cash-register.js');
