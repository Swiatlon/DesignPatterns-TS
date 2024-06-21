import { IRoundPeg, ISquarePeg } from "./Adapter.Interfaces";
import { RoundHole, RoundPeg, SquarePeg } from "./Adapter.Models";

class SquarePegAdapter implements IRoundPeg {
  private peg: ISquarePeg;

  constructor(peg: ISquarePeg) {
    this.peg = peg;
  }

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}

// Create instances of RoundHole and RoundPeg
const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);
console.log(hole.fits(rpeg)); // true

// Create instances of SquarePeg
const smallSqPeg = new SquarePeg(5);
const largeSqPeg = new SquarePeg(10);

// Create adapters for SquarePeg
const smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
const largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);

// Now the adapters can be used in place of RoundPeg
console.log(hole.fits(smallSqPegAdapter)); // true
console.log(hole.fits(largeSqPegAdapter)); // false
