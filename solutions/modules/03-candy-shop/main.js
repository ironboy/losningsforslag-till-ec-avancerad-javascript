/*
  main.js is the only file that knows about both of the others - it wires the
  data and the functions together.
*/
import { candy } from './data.js';
import { veganOnly, cheaperThan } from './filters.js';

const cheapVegan = cheaperThan(veganOnly(candy), 125);

console.log('Vegan candy under 125 kr/kg:');
for (const item of cheapVegan) {
  console.log(`- ${item.name}: ${item.pricePerKg} kr/kg`);
}
