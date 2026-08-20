/*
  Exercise 3: Housing (Bostäder)

  Demo file - the classes live in ./03-housing-classes/.
  Class names are the English versions of the assignment's Swedish ones:
  Address = Adress, Home = Bostad, Rental = Hyresrätt, Condo = Bostadsrätt,
  House = Villa.
*/

import Address from './03-housing-classes/Address.js';
import Person from './03-housing-classes/Person.js';
import Home from './03-housing-classes/Home.js';
import Loan from './03-housing-classes/Loan.js';
import Rental from './03-housing-classes/Rental.js';
import Condo from './03-housing-classes/Condo.js';
import House from './03-housing-classes/House.js';

const anna = new Person('Anna Ek', '900101-1234');
const bo = new Person('Bo Sand', '850505-5678');

const homes = [
  new Rental(
    new Address('Storgatan', 12, 'Göteborg', '41138'),
    anna,
    8900
  ),
  new Condo(
    new Address('Ekvägen', 3, 'Kungälv', '44230'),
    bo,
    2_950_000,
    4200,
    new Loan(2_400_000, 0.04)
  ),
  new House(
    new Address('Backavägen', 78, 'Mölndal', '43135'),
    anna,
    5_400_000,
    3500,
    new Loan(4_000_000, 0.035)
  )
];

// Same call, different behaviour per class - that is polymorphism at work.
for (const home of homes) {
  console.log(home.describe());
}

const total = homes.reduce((sum, home) => sum + home.monthlyCost(), 0);
console.log(`Total monthly cost: ${Math.round(total)} kr`);

// The base class refuses to guess a cost it knows nothing about.
try {
  const plainHome = new Home(new Address('Testgatan', 1, 'Testby', '12345'), anna);
  plainHome.monthlyCost();
} catch (error) {
  console.log('Error:', error.message);
}

// Wrong types are rejected in the constructor.
try {
  new Rental('Storgatan 12', anna, 8900);
} catch (error) {
  console.log('Error:', error.message);
}
