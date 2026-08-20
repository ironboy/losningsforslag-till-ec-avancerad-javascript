// A plain data class - no behaviour beyond formatting itself as a string.
export default class Address {

  constructor(street, streetNumber, city, postalCode) {
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.postalCode = postalCode;
  }

  toString() {
    return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}`;
  }

}
