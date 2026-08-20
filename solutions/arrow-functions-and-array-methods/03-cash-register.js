/*
  Exercise 3: The cash register (Kassaapparaten)

  All four tasks use reduce - the method for turning a whole array into one
  single value (a number, a string or even another object).
*/

const receipt = [
  { item: 'Mjölk', price: 22, quantity: 2 },
  { item: 'Bröd', price: 35, quantity: 1 },
  { item: 'Kaffe', price: 89, quantity: 1 },
  { item: 'Äpple', price: 8, quantity: 6 }
];

// 1. Total sum. The 0 at the end is the start value of the accumulator.
const total = receipt.reduce((sum, row) => sum + row.price * row.quantity, 0);

// 2. Total number of items.
const itemCount = receipt.reduce((count, row) => count + row.quantity, 0);

/*
  3. The most expensive row. Here the accumulator is an object from the array
  rather than a number: we keep whichever of the two rows is the larger one.
  No start value is given, so reduce starts with the first row.
*/
const mostExpensive = receipt.reduce((biggest, row) => {
  return row.price * row.quantity > biggest.price * biggest.quantity ? row : biggest;
});

/*
  4. Build the whole receipt as one string. The accumulator is a string that
  grows one line at a time. trimEnd() removes the last newline.
*/
const receiptText = receipt
  .reduce((text, row) => text + `${row.item} x${row.quantity} – ${row.price * row.quantity} kr\n`, '')
  .trimEnd();


/* ---------- Try it out ---------- */

console.log(`Total: ${total} kr`);           // 224 kr
console.log(`Items: ${itemCount}`);          // 10
console.log('Most expensive row:', mostExpensive);
console.log(receiptText);

/*
  Worth noting: tasks 1 and 2 could just as well be map + a sum, and task 3 can
  be done by sorting a copy and taking the first element. reduce is the clearest
  choice when you want ONE value out and no intermediate array along the way.
*/
