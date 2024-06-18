# Singleton Pattern

## Introduction

The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. This is useful when exactly one object is needed to coordinate actions across the system. The Singleton pattern restricts the instantiation of a class to one "single" instance.

## Key Features

1. **Single Instance**: Ensures that only one instance of the class exists.
2. **Global Access Point**: Provides a global point of access to the instance.

## Implementation

1. **Private Constructor**: Make the constructor private to prevent instantiation from outside the class.
2. **Static Method**: Provide a static method that returns the instance of the class.

## Example

This example demonstrates a logging system before and after applying the Singleton pattern.

### Before Singleton

Without the Singleton pattern, multiple instances of the `Logger` class can be created, leading to inconsistent states and potential issues in a logging system.

```typescript
class LoggerBefore {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

const loggerBefore1 = new LoggerBefore();
const loggerBefore2 = new LoggerBefore();

loggerBefore1.log("This is the first message");
loggerBefore2.log("This is the second message");

// Both loggerBefore1 and loggerBefore2 are different instances
console.log(loggerBefore1 === loggerBefore2); // Output: false
```

### After Singleton

Applying the Singleton pattern ensures that only one instance of the `Logger` class is created and used throughout the application.

```typescript
class LoggerAfter {
  private static instance: LoggerAfter;

  // Make the constructor private to prevent direct instantiation
  private constructor() {}

  // Static method to get the single instance of the Logger class
  public static getInstance(): LoggerAfter {
    if (!LoggerAfter.instance) {
      LoggerAfter.instance = new LoggerAfter();
    }
    return LoggerAfter.instance;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// Example usage
const loggerAfter1 = LoggerAfter.getInstance();
const loggerAfter2 = LoggerAfter.getInstance();

loggerAfter1.log("This is the first message");
loggerAfter2.log("This is the second message");

// Both loggerAfter1 and loggerAfter2 are the same instance
console.log(loggerAfter1 === loggerAfter2); // Output: true
```

## Conclusion

The Singleton pattern is a useful design pattern when you need to ensure that only one instance of a class is created and used throughout an application. It provides a global point of access to the instance, making it easy to coordinate actions across the system. This pattern is particularly useful in scenarios like logging, configuration management, and connection pooling where a single shared resource is preferable.
