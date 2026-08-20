import Home from './Home.js';

// Bostadsrätt - a monthly fee to the association, plus interest if there is a loan.
export default class Condo extends Home {

  constructor(address, owner, purchasePrice, monthlyFee, loan = null) {
    super(address, owner);
    this.purchasePrice = purchasePrice;
    this.monthlyFee = monthlyFee;
    this.loan = loan;
  }

  monthlyCost() {
    const interest = this.loan === null ? 0 : this.loan.monthlyInterest();
    return this.monthlyFee + interest;
  }

}
