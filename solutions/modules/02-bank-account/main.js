/*
  The default export is imported without braces and can be given any name we
  like - the named export must be in braces and spelled exactly right. Both fit
  on the same line.
*/
import BankAccount, { INTEREST_RATE } from './BankAccount.js';

const account = new BankAccount('Nadia', 500);

account.deposit(1200);
account.deposit(300);
account.withdraw(250);

const interest = account.balance * INTEREST_RATE;

console.log(`${account.owner} has ${account.balance} kr.`);
console.log(`One year of interest at ${INTEREST_RATE * 100} %: ${interest} kr`);
console.log(`Balance after one year: ${account.balance + interest} kr`);

// The class protects its own data.
try {
  account.withdraw(999_999);
} catch (error) {
  console.log('Error:', error.message);
}
