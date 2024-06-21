import { Strategy } from "./Strategy.Interfaces";

export class ConcreteStrategyAdd implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

export class ConcreteStrategySubtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

export class ConcreteStrategyMultiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

export class Context {
  private strategy!: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    return this.strategy.execute(a, b);
  }
}
