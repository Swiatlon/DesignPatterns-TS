import { IPeg, IRoundPeg, ISquarePeg } from "./Adapter.Interfaces";

export class RoundHole {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  fits(peg: IPeg): boolean {
    return this.getRadius() >= peg.getRadius();
  }
}

export class RoundPeg implements IRoundPeg {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

export class SquarePeg implements ISquarePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth(): number {
    return this.width;
  }
}
