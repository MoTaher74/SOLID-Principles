// Liskov Substitution Principle

//superclass
class Bird {
  fly() {
    console.log("I'm Flying");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow can fly high");
  }
}
class bird extends Bird {
  fly() {
    console.log("Bird can fly");
  }
}

function BirdFly(name) {
  name.fly();
}

const sparrow = new Sparrow();
const bird1 = new bird();

BirdFly(sparrow);
BirdFly(bird1);
