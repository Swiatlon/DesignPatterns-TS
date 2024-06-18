# Factory Pattern

## Introduction

The Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. This pattern is useful when the exact type of objects to be created should be determined at runtime.

## Key Features

1. **Encapsulation of Object Creation**: Encapsulates the creation logic of objects.
2. **Loose Coupling**: Promotes loose coupling by eliminating the need to bind application-specific classes into the code.
3. **Scalability**: Facilitates scalability by making it easy to introduce new types of objects without modifying the client code.

## Implementation

1. **Factory Class**: Create a factory class with a method for creating objects.
2. **Enum for Types**: Define an enum to manage different types of objects that can be created.
3. **Mapping Types to Classes**: Use a map to associate types with their corresponding classes.
4. **Creation Method**: Implement a method in the factory class to create and return instances based on the provided type.

## Example

This example demonstrates a transport delivery system that uses the Factory pattern to create instances of different types of transport vehicles.

### Interfaces and Classes

```typescript
interface ITransport {
  deliver(): void;
}

class CarTransport implements ITransport {
  deliver() {
    console.log("deliver by car");
  }
}

class TruckTransport implements ITransport {
  deliver() {
    console.log("deliver by truck");
  }
}

class DroneTransport implements ITransport {
  deliver() {
    console.log("deliver by drone");
  }
}
```

### Enum for Transport Types

```typescript
enum TransportTypes {
  Car = "Car",
  Truck = "Truck",
  Drone = "Drone",
}
```

### Transport Factory

```typescript
class TransportFactory {
  private transportMap: Map<TransportTypes, new () => ITransport>;

  constructor() {
    this.transportMap = new Map<TransportTypes, new () => ITransport>();
    this.transportMap.set(TransportTypes.Car, CarTransport);
    this.transportMap.set(TransportTypes.Truck, TruckTransport);
    this.transportMap.set(TransportTypes.Drone, DroneTransport);
  }

  public createTransport(transport: TransportTypes): ITransport {
    const TransportConstructor = this.transportMap.get(transport);

    if (!TransportConstructor) {
      throw new Error("Transport not implemented");
    }

    return new TransportConstructor();
  }
}
```

### Usage

```typescript
const carTransport = new TransportFactory().createTransport(TransportTypes.Car);
carTransport.deliver(); // Output: deliver by car

const truckTransport = new TransportFactory().createTransport(
  TransportTypes.Truck
);
truckTransport.deliver(); // Output: deliver by truck

const droneTransport = new TransportFactory().createTransport(
  TransportTypes.Drone
);
droneTransport.deliver(); // Output: deliver by drone
```

## Conclusion

The Factory pattern is a powerful tool for managing object creation in a scalable and maintainable way. By encapsulating the creation logic and promoting loose coupling, it makes it easy to introduce new types of objects without altering existing client code. This pattern is especially useful in systems where the exact types of objects to be created need to be determined at runtime.
