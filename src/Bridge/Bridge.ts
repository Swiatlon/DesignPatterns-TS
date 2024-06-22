import { Red, Blue, Circle, Square } from "./Bridge.Models";

const red = new Red();
const blue = new Blue();

const redCircle = new Circle(red);
const blueCircle = new Circle(blue);
const redSquare = new Square(red);
const blueSquare = new Square(blue);

console.log(redCircle.draw()); // Output: Circle drawn in red
console.log(blueCircle.draw()); // Output: Circle drawn in blue
console.log(redSquare.draw()); // Output: Square drawn in red
console.log(blueSquare.draw()); // Output: Square drawn in blue
    