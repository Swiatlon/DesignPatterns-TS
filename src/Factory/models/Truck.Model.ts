import { Transport } from "../interfaces/Transport.interface";

export class TruckTransport implements Transport {
  deliver(): void {
    console.log("Delivering by truck");
  }
}
