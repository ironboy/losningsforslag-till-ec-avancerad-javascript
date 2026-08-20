/*
  Exercise 1: The toolbox (Verktygslådan)

  Three small string helpers, exported as named exports.
  Named exports fit here: the file is a toolbox of equal parts, not one main
  thing. The importer has to use the exact names, which keeps them consistent.
*/

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const reverse = str => [...str].reverse().join('');

export const shout = str => `${str.toUpperCase()}!!!`;

/*
  You can also declare the functions first and export them in one go at the
  bottom of the file:

  export { capitalize, reverse, shout };
*/
