/**
 * class Animal {
    run() {
        console.log("Running fast!");
    }
}
class Dog extends Animal {
    run() {
        console.log("Dog running!");
    }
}
class Fish extends Animal {
    run() {
        throw new Error("Fish can't run!");
    }
}

الهدف: خلي Fish يشتغل من غير ما يكسر النظام.
 */

class Animal {
  swim() {
    console.log("Animal can swimming");
  }
}

class Dog extends Animal {
  swim() {
    console.log("Dogs Can swim very good");
  }
}

class Fish extends Animal {
  swim() {
    console.log("fish can swim");
  }
}
function animalSwim(title) {
  title.swim();
}
const Dogs = new Dog();
const Fishs = new Fish();
animalSwim(Dogs);
animalSwim(Fishs);

// --------------------------
console.log("-".repeat(100));

/**
 * class Printer {
    print(text) {
        console.log(`Printing: ${text}`);
    }
}
class LaserPrinter extends Printer {
    print(text) {
        console.log(`Laser printing: ${text}`);
    }
}
class ThreeDPrinter extends Printer {
    print(text) {
        throw new Error("3D printers don't print text!");
    }
}
 * الهدف: خلي ThreeDPrinter يشتغل من غير ما يكسر النظام.
 */

class Printer {
  print() {
    console.log("print started");
  }
}
class LasserPrinter extends Printer {
  print() {
    console.log("can u printed lasser ");
  }
}
class ThreeDPrinter extends Printer {
  print() {
    console.log("3D can u printed");
  }
}
function printerInfo(info) {
  info.print();
}

const lasser = new LasserPrinter();
const D3 = new ThreeDPrinter();
printerInfo(lasser);
printerInfo(D3);
