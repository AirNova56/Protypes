function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    console.log(`Привіт, мене звати ${this.name}.`);
  };
  
  function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject; 
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.study = function () {
    console.log(`${this.name} вивчає ${this.subject}.`);
  };
  
  const student1 = new Student('Олександр', 'Програмування');
  
  student1.greet();
  student1.study();