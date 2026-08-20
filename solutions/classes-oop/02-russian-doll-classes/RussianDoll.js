/*
  A doll composes another doll (insideMe).

  To be able to answer "may I move a doll that is already nested?" each doll
  also keeps a reference to the doll it currently sits inside. That is a
  two-way binding again, and putInsideMe/takeOutOfMe are the only places
  allowed to touch it. Since one doll holds exactly one other doll and sizes
  must decrease strictly inwards, the whole set forms a chain - in effect a
  sorted linked list.

  Two deliberate simplifications, worth knowing about before you use this:

  1. The class does not enforce that a doll is REACHABLE. In the physical
     world you cannot open a doll that is closed inside another one - you have
     to unstack from the outside in. Here, calling putInsideMe or takeOutOfMe
     on a doll that is itself nested works anyway. Enforcing it would mean an
     `insideOf === null` check at the top of both methods, and putInsideMe's
     recursion below would have to be rewritten as a loop, since the recursion
     deliberately targets dolls that ARE nested.

  2. A new doll always ends up innermost. If the doll you pass in is bigger
     than what the set already contains, it is rejected rather than spliced
     into the middle of the chain - even though that would be perfectly
     possible with real dolls. Supporting it means sorted insertion into a
     linked list, including re-linking whatever gets displaced.

  Both are fine for the exercise, but they are choices, not laws of nature.
*/
export default class RussianDoll {

  constructor(size) {
    if (typeof size !== 'number' || size < 1 || size > 10) {
      throw new RangeError('size must be a number between 1 and 10.');
    }
    this.size = size;
    this.insideMe = null;   // the doll this doll contains
    this.insideOf = null;   // the doll this doll is contained by
  }

  putInsideMe(doll) {
    if (!(doll instanceof RussianDoll)) {
      throw new TypeError('putInsideMe expects a RussianDoll object.');
    }
    if (doll === this) {
      throw new Error('A doll cannot be put inside itself.');
    }
    if (doll.size >= this.size) {
      throw new Error(`A doll of size ${doll.size} does not fit inside size ${this.size}.`);
    }
    if (this.insideMe !== null) {
      // Occupied - pass the doll further in, which is how a real set is
      // stacked. The recursive call re-runs all the checks above.
      return this.insideMe.putInsideMe(doll);
    }
    if (doll.insideOf !== null) {
      // Answer to the reflection question: a nested doll is not free to move.
      throw new Error(`That doll is already inside a doll of size ${doll.insideOf.size}.`);
    }
    this.insideMe = doll;
    doll.insideOf = this;
    return this;
  }

  /*
    Removes and returns the doll directly inside this one, leaving whatever it
    holds in turn untouched. Note simplification 1 above: this works even if
    this doll is itself buried inside another doll.
  */
  takeOutOfMe() {
    if (this.insideMe === null) {
      throw new Error('This doll is empty.');
    }
    const doll = this.insideMe;
    this.insideMe = null;
    doll.insideOf = null;
    return doll;
  }

  // Every doll further in, from the closest one to the innermost one.
  allDollsInsideMe() {
    if (this.insideMe === null) {
      return [];
    }
    return [this.insideMe, ...this.insideMe.allDollsInsideMe()];
  }

}
