/**
 * 
 * class Vehicle {
    drive() {
        console.log("Driving on road!");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car driving smoothly!");
    }
}

class Bicycle extends Vehicle {
    drive() {
        throw new Error("Bicycles don't drive, they pedal!");
    }
}

function startVehicle(vehicle) {
    vehicle.drive();
}

const car = new Car();
const bike = new Bicycle();

startVehicle(car);  // Car driving smoothly!
startVehicle(bike); // Error: Bicycles don't drive!
 */
class Vehicle {
  drive() {
    console.log("Driving on road!");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("car speed is 80 km/hr");
  }
}
class Bicycle extends Vehicle {
  drive() {
    console.log("Bicycle Padeling fast ");
  }
}

function vehicleSpeed(name) {
  name.drive();
}
const car = new Car();
const bike1 = new Bicycle();
vehicleSpeed(car);
vehicleSpeed(bike1);
