# Adapter Pattern

## When to Use the Adapter Pattern

The Adapter Pattern is used when you need to make two incompatible interfaces work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects. This pattern is particularly useful when integrating third-party libraries or legacy systems into your application without modifying their source code.

### Examples of Use Cases:

- Integrating a new library into an existing codebase that expects a different interface.
- Adapting legacy code to work with modern interfaces.
- Allowing two software components with incompatible interfaces to communicate.

## Patterns That Work Well Together

The Adapter Pattern often works well with the following design patterns:

- **Facade Pattern**: A Facade can be used with an Adapter to provide a simpler interface to a complex subsystem.
- **Decorator Pattern**: Can be combined with Adapter to add responsibilities to objects without altering their interface.
- **Bridge Pattern**: The Adapter Pattern can be used to adapt an interface while the Bridge Pattern separates abstraction from implementation.

---
