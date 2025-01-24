
// JS classes are templates for JS objects.
// Use the keyword class to create a class. Always add a method named constructor():
/*
 syntax: class className {
     constructor() {...}
 }
 */
// The constructor method is a special method: It has to have the exact name "constructor"
//   It is executed automatically when a new object is created. It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method. 
class Person {    // class Person contains two properties: name and age.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// creating an object.
const p1 = new Person("Bimal", 23);
const p2 = new Person("Rohini", 31);


// class method:
// Class methods are created with the same syntax as object methods. Always add a constructor() method. Then add any numbers of method.
class Car{
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age()  { // class method; note that it doesn't start with 'function' keyword as the normal functions/ methods. 

    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const c1 = new Car("Tesla", 2015);  // declaring an object c1 of class Car.
console.log(`The car is ${c1.age()} years old`);   // The car is  NaN years old.


