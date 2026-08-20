import Musician from './Musician.js';

/*
  A band knows its members - the mirror image of Musician.

  Note that Musician.js and Band.js import each other. That is fine here: the
  imports are only used inside methods, which run long after both files have
  finished loading.
*/
export default class Band {

  constructor(name) {
    this.name = name;
    // Same idea as in Musician: members are added through hire/fire only.
    this.members = [];
  }

  hire(musician) {
    if (!(musician instanceof Musician)) {
      throw new TypeError('hire expects a Musician object, not a string.');
    }
    if (this.members.includes(musician)) {
      return;
    }
    this.members.push(musician);
    // joinBand has the same guard, so the calls stop there.
    musician.joinBand(this);
  }

  fire(musician) {
    if (!(musician instanceof Musician)) {
      throw new TypeError('fire expects a Musician object, not a string.');
    }
    if (!this.members.includes(musician)) {
      return;
    }
    this.members = this.members.filter(member => member !== musician);
    musician.leaveBand(this);
  }

  describe() {
    const memberNames = this.members.map(member => member.name);
    const memberText = memberNames.length === 0 ? 'nobody' : memberNames.join(', ');
    return `${this.name} consists of ${memberText}`;
  }

}
