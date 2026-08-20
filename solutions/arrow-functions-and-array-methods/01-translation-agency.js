/*
  Exercise 1: The translation agency (Översättningsbyrån)

  Every function rewritten as an arrow function, in the shortest form that
  still works.
*/

// One parameter, one expression - parentheses and braces can both go.
const triple = x => x * 3;

// Two parameters means we have to keep the parentheses.
const greet = (name, city) => `Hej ${name} från ${city}!`;

// No parameters: empty parentheses are required.
const randomDie = () => Math.ceil(Math.random() * 6);

/*
  The trap: `(name, email) => { name: name }` would be read as a function BODY
  with a label inside it, not as an object. Wrapping the object literal in
  parentheses tells JavaScript it is a value we return.
  Shorthand properties let us write `name` instead of `name: name`.
*/
const makeUser = (name, email) => ({ name, email });

/*
  The loop cannot be squeezed into an expression as it stands - but reduce can
  do the summing for us. Note the neat trick: shipping is used as reduce's
  start value, so it ends up in the total for free.
*/
const orderTotal = (prices, shipping) => prices.reduce((sum, price) => sum + price, shipping);


/* ---------- Try it out ---------- */

console.log(triple(7));                              // 21
console.log(greet('Lisa', 'Kalmar'));                // Hej Lisa från Kalmar!
console.log(randomDie());                            // 1-6
console.log(makeUser('Ali', 'ali@example.com'));     // { name: 'Ali', email: '...' }
console.log(orderTotal([120, 80, 45], 49));          // 294
