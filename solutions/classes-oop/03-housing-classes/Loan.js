/*
  A loan is not a kind of home, so it inherits from nothing - it is simply an
  object a home can own. Both Condo and House reuse it through composition,
  which saves us from inventing an extra level of inheritance.
*/
export default class Loan {

  constructor(amount, annualInterestRate) {
    this.amount = amount;
    this.annualInterestRate = annualInterestRate; // e.g. 0.04 for 4 %
  }

  monthlyInterest() {
    return (this.amount * this.annualInterestRate) / 12;
  }

}
