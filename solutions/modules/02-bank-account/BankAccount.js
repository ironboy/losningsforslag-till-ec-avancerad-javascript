/*
  Exercise 2: The main thing (Huvudsaken)

  This file has one obvious main export - the class - so it goes out as the
  default export. The interest rate is a supporting detail and is exported as
  a named export alongside it.
*/

export const INTEREST_RATE = 0.02;

export default class BankAccount {

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new RangeError('Deposits must be positive.');
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError('Withdrawals must be positive.');
    }
    if (amount > this.balance) {
      throw new Error(`Not enough money: balance is ${this.balance} kr.`);
    }
    this.balance -= amount;
    return this.balance;
  }

}
