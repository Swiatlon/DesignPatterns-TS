import {
  ConcreteStrategyAdd,
  ConcreteStrategyMultiply,
  ConcreteStrategySubtract,
  Context,
} from "./Strategy.Models";

class ExampleApplication {
  public static main(): void {
    const context = new Context();

    const a = 5;
    const b = 3;
    let action: "addition" | "subtraction" | "multiplication";
    action = "addition";

    switch (action as any) {
      case "addition":
        context.setStrategy(new ConcreteStrategyAdd());
        break;
      case "subtraction":
        context.setStrategy(new ConcreteStrategySubtract());
        break;
      case "multiplication":
        context.setStrategy(new ConcreteStrategyMultiply());
        break;
      default:
        throw new Error("Unknown action");
    }

    const result = context.executeStrategy(a, b);
    console.log(`Result of ${action}: ${result}`);
  }
}

ExampleApplication.main();
