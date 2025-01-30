const prompt = require("prompt-sync")();   // to take user input in console.

// Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  static greet() {    // it's not regular function and can't be invoked by the object but only can be invoded by 'object class' or simply class.
    console.log("Hello there, how are you doing today?");
  }
}

const p1 = new Person("Bimal", 23);     // creating an object 'p1' of class Person with constructor.
console.log(`Hello I'm ${p1.name} and I'm ${p1.age} years old.`);
console.log(Person.greet());   // classing the static mehtod using 'object class' (class) 
// console.log(p1.greet());   # this'll throw an error since we're trying to static method using the object not the class itself.
