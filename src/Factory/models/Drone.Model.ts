import { Transport } from "../interfaces/Transport.interface";

export class DroneTransport implements Transport {
  deliver(): void {
    console.log("Delivering by drone");
  }
}
