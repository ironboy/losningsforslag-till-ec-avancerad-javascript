import Band from './Band.js';

/*
  A musician knows which bands it plays in.

  The two-way binding lives here and in Band: each method updates its own side
  first and then calls over to the other object. The "already there / not there"
  checks at the top are what stops the two objects from calling each other
  forever.
*/
export default class Musician {

  constructor(name, instrument, age) {
    this.name = name;
    this.instrument = instrument;
    this.age = age;
    // Always start empty - bands are added through joinBand/leaveBand.
    this.bands = [];
  }

  joinBand(band) {
    if (!(band instanceof Band)) {
      throw new TypeError('joinBand expects a Band object, not a string.');
    }
    // Guard: nothing to do if we are already a member.
    // This is also what breaks the mutual call chain below.
    if (this.bands.includes(band)) {
      return;
    }
    this.bands.push(band);
    // Update the other side. hire() has the same guard, so it stops there.
    band.hire(this);
  }

  leaveBand(band) {
    if (!(band instanceof Band)) {
      throw new TypeError('leaveBand expects a Band object, not a string.');
    }
    if (!this.bands.includes(band)) {
      return;
    }
    this.bands = this.bands.filter(memberOf => memberOf !== band);
    band.fire(this);
  }

  // Small convenience method - handy when logging.
  describe() {
    const bandNames = this.bands.map(band => band.name);
    const bandText = bandNames.length === 0 ? 'no bands' : bandNames.join(', ');
    return `${this.name} (${this.instrument}, ${this.age}) plays in ${bandText}`;
  }

}
