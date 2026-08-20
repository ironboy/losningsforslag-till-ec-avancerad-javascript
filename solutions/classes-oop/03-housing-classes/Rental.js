import Home from './Home.js';

// Hyresrätt - the tenant pays rent and nothing else.
export default class Rental extends Home {

  constructor(address, owner, rent) {
    super(address, owner);
    this.rent = rent;
  }

  monthlyCost() {
    return this.rent;
  }

}
