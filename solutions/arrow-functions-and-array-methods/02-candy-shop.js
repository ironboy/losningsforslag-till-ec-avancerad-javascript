/*
  Exercise 2: The candy shop (Godisbutiken)

  Each task is solved with a single chain of array methods.
*/

const candy = [
  { name: 'Gelehallon', pricePerKg: 89, vegan: true },
  { name: 'Lakritsbåtar', pricePerKg: 119, vegan: false },
  { name: 'Sura colanappar', pricePerKg: 99, vegan: true },
  { name: 'Chokladskruvar', pricePerKg: 149, vegan: false },
  { name: 'Polkagriskrossar', pricePerKg: 129, vegan: true }
];

// 1. Names of all vegan candy.
// Filter first, map last: once we map to strings the vegan flag is gone.
const veganNames = candy
  .filter(item => item.vegan)
  .map(item => item.name);

// 2. Names of everything under 125 kr/kg, cheapest first.
// sort() mutates the array it is called on - but filter() has already given us
// a fresh array, so the original `candy` is untouched.
const cheapNamesSorted = candy
  .filter(item => item.pricePerKg < 125)
  .sort((a, b) => a.pricePerKg - b.pricePerKg)
  .map(item => item.name);

// 3. "Gelehallon – 89 kr/kg" for vegan candy under 100 kr/kg.
const veganBargains = candy
  .filter(item => item.vegan && item.pricePerKg < 100)
  .map(item => `${item.name} – ${item.pricePerKg} kr/kg`);

/*
  4. Raise every price by 10 %, without touching the original array.
  The spread operator copies the existing properties into a brand new object,
  and pricePerKg is written after the spread so it overrides the old value.
*/
const raisedPrices = candy.map(item => ({
  ...item,
  pricePerKg: Math.round(item.pricePerKg * 1.1)
}));


/* ---------- Try it out ---------- */

console.log(veganNames);
console.log(cheapNamesSorted);
console.log(veganBargains);
console.log(raisedPrices);
console.log(candy[0].pricePerKg); // still 89 - the original is intact
