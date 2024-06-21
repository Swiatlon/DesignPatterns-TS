export interface Builder {
  reset(): void;
  setSeats(seats: number): void;
  setEngine(engine: string): void;
  setTripComputer(hasTripComputer: boolean): void;
  setGPS(hasGPS: boolean): void;
}
