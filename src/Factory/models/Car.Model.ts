import { Transport } from "../interfaces/Transport.interface";

export class CarTransport implements Transport {
  deliver(): void {
    console.log("Delivering by car");
  }
}
