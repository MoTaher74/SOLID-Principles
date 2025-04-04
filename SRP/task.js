class PrintPrice {
  Price(price) {
    console.log(`Book price = $${price.salary}`);
  }
}
class ClaculateDiscount {
  Discount(discount) {
    console.log(`Calculating Discount is ${discount.salary * 0.9}`);
    return discount.salary * 0.5;
  }
}
class PrintName {
  Print(print) {
    console.log(`Book Name is ${print.title}`);
  }
}
class Books {
  constructor(title, salary) {
    this.title = title;
    this.salary = salary;
  }
}

const book1 = new Books("Book 1 ", 25);
const printPrice = new PrintPrice();
const printName = new PrintName();
const discount = new ClaculateDiscount();
printName.Print(book1);
printPrice.Price(book1);
discount.Discount(book1);
