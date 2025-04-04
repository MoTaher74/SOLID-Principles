// OCP =>>>> Open / Closed Principle

// with out Solid OCP

class Payment {
  pay(method, amount) {
    if (method === "cash") {
      console.log(`Pay =$${amount} for cash `);
    } else if (method === "credit") {
      console.log(`Pay =$${amount} for credit card`);
    } else {
      console.log("Payment Not Supported For Now !!");
    }
  }
}

const pay = new Payment();
pay.pay("credit", 150);
pay.pay("", 150);

console.log("-".repeat(50));

// apply Solid OCP
class PaymentMethod {
  pay(amount) {
    throw new Error("this method should be overhidden");
  }
}
class CreditCard extends PaymentMethod {
  pay(amount) {
    console.log(`Paid ${amount} with card`);
  }
}
class Paypal extends PaymentMethod {
  pay(amount) {
    console.log(`paid ${amount} with PayPal`);
  }
}
class PayProcess {
  constructor(payMethod) {
    this.payMethod = payMethod;
  }
  process(amount) {
    this.payMethod.pay(amount);
  }
}

const Credit = new PayProcess(new CreditCard());
Credit.process(100);
const Paypal1 = new PayProcess(new Paypal());
Paypal1.process(250);
