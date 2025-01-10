// Objects are variables too. But objects can contain many values. It is a common practice to declare objects with the const keyword.
// We can declare JS objects in 3 ways: i) Using object literal, ii) using 'new' keyword, iii)Using an object constructor.

// An object literal (or object initializer) is a list of name:value pairs inside curly braces {}.
const car = {type: "Fiat", model:"500", color: "Black"};

// Spaces and line breaks are not important. An object initializer can span multiple lines:
const person = {
  firstName: "Bimal", 
  lastName: "Paudel", 
  age: 23
};

// We can also declare empty object first and add properties later.
const person1 = {};   // an empty object
person1.name = "Rohini";
person1.age = 31;

// Using 'new Object()' keyword:
const person3 = new Object();
person3.name = "Nirmal";
person3.gender = "Male";

// For readability, simplicity and execution speed, use the object literal method.
// Objects written as name value pairs are similar to Associative arrays in PHP.

// Accessing object properties:
// Properties of an object can be accessed using one of the two ways:

console.log(person1.name);  // firstMethod => objectName.propertyName
console.log(person1["age"]);  // secondMehtod = > objectName["propertyName"];

// JS object methods: Methods are actions that can be performed on objects.
// Methods are function definitions stored as property values.
// fullName : function() {return this.firstName + " " lastName};

const person2 = {
  firstName : "John", 
  lastName : "Doe", 
  id : 5456,
  fullName : function() {
    return this.firstName + " " + lastName;
  }
};

// In the example above, this refers to the person object : this.firstName means the firstName property of person.


// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.

// JS premitives: A primitive value is a value that has no properties or methods.Primitive values are immutable (they are hardcoded and cannot be changed).
// JavaScript defines 7 types of primitive data types:
// i)string, ii) number, iii)boolean, iv) null, v) undefined, vi) symbol, vii) bigint.


// JavaScript Objects are Mutable:Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
const x = person;
// He object x is not a copy of person. The object x is person.The object x and the object person share the same memory address.
// Any changes to x will also change person:


// create an object
const person4 = {
  firstName: "Rohini", 
  lastName: "Paudel",
  age: 31
};
console.log(person4);

// create a copy of person 4
const y = person4;
y.firstName = "Matrika";  // firstName property is update in both 'person4' and 'y' objects.
console.log(y);

// Different ways of accessing objects property.
console.log(`${person4.name} is ${person4.age} years old.`);
console.log(`${person4["name"]} is ${person4["age"]} years old.`);
let a = "firstName";
let b = "age";
console.log(`${person4[a]} id ${person[b]} years old.`)

console.log(person4["lastName"]); // Paudel 
// The delete keyword deletes a property from an object:
delete person4.lastName;   // lastName property gets deleted.
// delete person4["lastName"];
// delete person4[b];

console.log(person4.lastName);  // Undefined


// Note: The delete keyword deletes both the value of the property and the property itself. After deletion, the property cannot be used before it is added back again.


// Nested Objects: Property values in an object can be other objects:
myObj = {
  name: "John",
  age: 25,
  hisCars: {
    car1: "BMW",
    car2: "Audi",
    car3: "Honda"
  }
}


// You can access nested objects using the dot notation or the bracket notation:
console.log(myObj.hisCars.car1);
console.log(myObj.hisCars["car2"])
console.log(myObj["hisCars"]["car3"]);
let p1 = "hisCars";
let p2 = "car3";
console.log(myObj[p1][p2]);

// Object methods: object methods are actions that can be performed on objects. A method is a function definition stored as property values.

const myInfo = {
  firstName : "Bimal",
  lastName : "Paudel",
  age : 23,
  fullName : function(){
    return this.firstName + " " + this.lastName;
  }
};
// In the example above, this refers to the person object, this.firstName means the firstName property of person.
// You access an object method with the following syntax:  objectName.methodName()
let name = myInfo.fullName();  // If you invoke the fullName property with (), it will execute as a function:
console.log(`Full Name: ${name}`);  // Full Name: Bimal Paudel

let name1 = myInfo.fullName; // If you access the fullName property without (), it will return the function definition:
console.log(name1);  // [Function: fullName]

// Adding a Method to an existing Object:
myInfo.greet = function() {
  return (`Hello ${this.firstName}, how are you doing today?`).toUpperCase();  // using JS toUpperCase() method.
}

let greet = myInfo.greet();
console.log(greet);  // Hello Bimal, how are you doing today?




















