import Home from './Home.js';

// Villa - running costs (waste collection, water, heating), plus loan interest.
export default class House extends Home {

  constructor(address, owner, purchasePrice, runningCost, loan = null) {
    super(address, owner);
    this.purchasePrice = purchasePrice;
    this.runningCost = runningCost;
    this.loan = loan;
  }

  monthlyCost() {
    const interest = this.loan === null ? 0 : this.loan.monthlyInterest();
    return this.runningCost + interest;
  }

}
