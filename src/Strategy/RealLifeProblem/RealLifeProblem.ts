interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Credit Card.`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal.`);
  }
}

class BankTransferPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Bank Transfer.`);
  }
}

class PaymentContext {
  private strategy!: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

class ExampleApplication {
  public static main(): void {
    const context = new PaymentContext();

    const amount = 100;
    const paymentMethod: "creditcard" | "paypal" | "banktransfer" = "paypal";

    switch (paymentMethod as any) {
      case "creditcard":
        context.setStrategy(new CreditCardPayment());
        break;
      case "paypal":
        context.setStrategy(new PayPalPayment());
        break;
      case "banktransfer":
        context.setStrategy(new BankTransferPayment());
        break;
      default:
        throw new Error("Unknown payment method");
    }

    context.executePayment(amount);
  }
}

ExampleApplication.main();
