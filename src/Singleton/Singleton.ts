// ---------------------------------------------- BEFORE SINGLETON  ------------------------------------------------------------------- //
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

// ---------------------------------------------- AFTER SINGLETON  ------------------------------------------------------------------- //

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
