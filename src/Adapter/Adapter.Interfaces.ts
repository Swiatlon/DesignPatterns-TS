export interface IPeg {
  getRadius(): number;
}

export interface IRoundPeg extends IPeg {
  getRadius(): number;
}

export interface ISquarePeg {
  getWidth(): number;
}
