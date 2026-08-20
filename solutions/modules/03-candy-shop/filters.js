/*
  Pure functions that take a list and return a new list. They do not import the
  data - the caller decides what to filter. That is what makes them reusable
  and easy to test.
*/

export const veganOnly = candyList => candyList.filter(item => item.vegan);

export const cheaperThan = (candyList, maxPrice) =>
  candyList.filter(item => item.pricePerKg < maxPrice);
