import { Director, CarBuilder, CarManualBuilder } from "./Builder.Models";

const director = new Director();

const carBuilder = new CarBuilder();
director.constructSportsCar(carBuilder);
const car = carBuilder.getProduct();

const carManualBuilder = new CarManualBuilder();
director.constructSportsCar(carManualBuilder);
const manual = carManualBuilder.getProduct();

console.log(car);
console.log(manual);
