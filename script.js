function Vehicle(type, speed) {
    this.type = type; 
    this.speed = speed; 
  }
  
  Vehicle.prototype.move = function () {
    console.log(`${this.type} рухається зі швидкістю ${this.speed} км/год.`);
  };
  
  const car = new Vehicle('Car', 100);
  
  car.move();