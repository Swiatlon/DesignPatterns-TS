import {
  Transport,
  TransportTypes,
  transportTypes,
} from "./interfaces/Transport.interface";
import { CarTransport } from "./models/Car.Model";
import { DroneTransport } from "./models/Drone.Model";
import { TruckTransport } from "./models/Truck.Model";

// ---------------------------------------------- BEFORE FACTORY  ------------------------------------------------------------------- //
{
  type TransportTypes = "Car" | "Truck" | "Drone";

  // Every time we add a new transport type, we need to add a new if statement
  // to the deliver method. This is a violation of the Open/Closed Principle.
  class Truck {
    deliver(vehicle: TransportTypes): void {
      if (vehicle === "Truck") {
        console.log("Delivering by truck");
      }

      if (vehicle === "Car") {
        console.log("Delivering by car");
      }

      if (vehicle === "Drone") {
        console.log("Delivering by drone");
      }
    }
  }

  const truck = new Truck();
  console.log("BEFORE FACTORY:");
  truck.deliver("Car");
}

// ---------------------------------------------- AFTER FACTORY  ------------------------------------------------------------------- //
class TransportFactory {
  private transportMap: Map<TransportTypes, new () => Transport>;

  constructor() {
    this.transportMap = new Map<TransportTypes, new () => Transport>();
    this.transportMap.set(transportTypes.car, CarTransport);
    this.transportMap.set(transportTypes.truck, TruckTransport);
    this.transportMap.set(transportTypes.drone, DroneTransport);
  }

  public createTransport(transport: TransportTypes): Transport {
    const TransportConstructor = this.transportMap.get(transport);

    if (!TransportConstructor) {
      throw new Error("Transport not implemented");
    }

    return new TransportConstructor();
  }
}
console.log("AFTER FACTORY:");
const car = new TransportFactory()
  .createTransport(transportTypes.car)
  .deliver();
