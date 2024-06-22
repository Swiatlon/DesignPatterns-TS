import { Color } from "./Bridge.Interfaces";

export class Red implements Color {
  applyColor(): string {
    return "red";
  }
}

export class Blue implements Color {
  applyColor(): string {
    return "blue";
  }
}

abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): string;
}

export class Circle extends Shape {
  draw(): string {
    return `Circle drawn in ${this.color.applyColor()}`;
  }
}

export class Square extends Shape {
  draw(): string {
    return `Square drawn in ${this.color.applyColor()}`;
  }
}
