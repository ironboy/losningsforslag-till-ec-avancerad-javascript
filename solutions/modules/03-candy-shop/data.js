/*
  Exercise 3: The candy shop moves into modules (Godisbutiken flyttar in i moduler)

  Pure data, nothing else. This file knows nothing about filters.js - it can be
  reused by any module that needs the assortment.

  Named export or default? Either works. A default export would say "this file
  is about one thing", which is true here. Named export is chosen because it
  keeps the name `candy` consistent everywhere it is imported, and because it
  leaves room to add more data (prices, categories) later without a rewrite.
*/

export const candy = [
  { name: 'Gelehallon', pricePerKg: 89, vegan: true },
  { name: 'Lakritsbåtar', pricePerKg: 119, vegan: false },
  { name: 'Sura colanappar', pricePerKg: 99, vegan: true },
  { name: 'Chokladskruvar', pricePerKg: 149, vegan: false },
  { name: 'Polkagriskrossar', pricePerKg: 129, vegan: true }
];
