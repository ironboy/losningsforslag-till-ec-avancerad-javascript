/*
  Exercise 4: The same thing in the browser (Samma sak i webbläsaren)

  data.js and filters.js are imported straight from the previous exercise - the
  exact same module files run unchanged in Node and in the browser. Only this
  entry file differs, because here we also write to the page.
*/
import { candy } from '../03-candy-shop/data.js';
import { veganOnly, cheaperThan } from '../03-candy-shop/filters.js';

const cheapVegan = cheaperThan(veganOnly(candy), 125);

console.log('Vegan candy under 125 kr/kg:');
for (const item of cheapVegan) {
  console.log(`- ${item.name}: ${item.pricePerKg} kr/kg`);
}

// Same result on the page, so you can see it without opening the console.
document.querySelector('#result').innerHTML = cheapVegan
  .map(item => `<li>${item.name} – ${item.pricePerKg} kr/kg</li>`)
  .join('');
