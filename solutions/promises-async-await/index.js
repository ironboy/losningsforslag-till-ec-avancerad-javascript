/*
  Runs every demo in this area, in exercise order. See classes-oop/index.js for
  why the imports are dynamic and awaited - it matters most here, since every
  file in this folder uses top-level await.

  Takes a while: the traffic light alone runs for about 16 seconds, and
  exercises 3-6 need an internet connection.
*/

console.log('--- The traffic light (Trafikljuset) ---');
await import('./01-traffic-light.js');

console.log('\n--- The unreliable server (Den opålitliga servern) ---');
await import('./02-unreliable-server.js');

console.log('\n--- Fetch a user (Hämta en användare) ---');
await import('./03-get-user.js');

console.log('\n--- The user\'s todos (Användarens todos) ---');
await import('./04-user-todos.js');

console.log('\n--- All at once (Alla på en gång) ---');
await import('./05-all-at-once.js');

console.log('\n--- From then to await (Från then till await) ---');
await import('./06-then-to-await.js');
