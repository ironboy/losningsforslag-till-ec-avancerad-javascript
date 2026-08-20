import Address from './Address.js';
import Person from './Person.js';

/*
  Base class for all homes (Bostad in the assignment).

  Composition: a home HAS an Address and HAS an owner (Person).
  Inheritance: Rental, Condo and House all IS A Home - they share address and
  owner and only differ in how the monthly cost is made up. That is exactly the
  case where inheritance is the right tool.
*/
export default class Home {

  constructor(address, owner) {
    if (!(address instanceof Address)) {
      throw new TypeError('A home needs an Address object.');
    }
    if (!(owner instanceof Person)) {
      throw new TypeError('A home needs a Person as owner.');
    }
    this.address = address;
    this.owner = owner;
  }

  /*
    The base class cannot know how a cost is built up, but it does declare that
    every home must be able to answer the question. Subclasses override it.
  */
  monthlyCost() {
    throw new Error(`${this.constructor.name} must implement monthlyCost().`);
  }

  describe() {
    return `${this.constructor.name} at ${this.address}, owned by ${this.owner.name}: `
      + `${Math.round(this.monthlyCost())} kr/month`;
  }

}
