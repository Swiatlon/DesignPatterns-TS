import { Builder } from "./Builder.Interfaces";

class Car {
  seats!: number;
  engine!: string;
  tripComputer!: boolean;
  gps!: boolean;
}

class Manual {
  seatInfo!: string;
  engineInfo!: string;
  tripComputerInfo!: string;
  gpsInfo!: string;
}

export class CarBuilder implements Builder {
  private car!: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(seats: number): void {
    this.car.seats = seats;
  }

  setEngine(engine: string): void {
    this.car.engine = engine;
  }

  setTripComputer(hasTripComputer: boolean): void {
    this.car.tripComputer = hasTripComputer;
  }

  setGPS(hasGPS: boolean): void {
    this.car.gps = hasGPS;
  }

  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}

// LIKE INSTRUCTION WHAT WE CAN DO WITH OUR CAR
export class CarManualBuilder implements Builder {
  private manual!: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(seats: number): void {
    this.manual.seatInfo = `Seats: ${seats}`;
  }

  setEngine(engine: string): void {
    this.manual.engineInfo = `Engine: ${engine}`;
  }

  setTripComputer(hasTripComputer: boolean): void {
    this.manual.tripComputerInfo = hasTripComputer
      ? "Trip Computer: Yes"
      : "Trip Computer: No";
  }

  setGPS(hasGPS: boolean): void {
    this.manual.gpsInfo = hasGPS ? "GPS: Yes" : "GPS: No";
  }

  getProduct(): Manual {
    const product = this.manual;
    this.reset();
    return product;
  }
}

export class Director {
  constructSportsCar(builder: Builder): void {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine("SportEngine");
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructSUV(builder: Builder): void {
    builder.reset();
    builder.setSeats(5);
    builder.setEngine("SUVEngine");
    builder.setTripComputer(true);
    builder.setGPS(true);
  }
}
