// Displaying JS object properties: they can be displayed in 4 ways: 
// i) using 'objectName.propertyName', ii) using loop, iii) using 'Object.values()', iv) using "JSON.stringify()"
const person = {
  name : "Bimal", 
  age: 23,
  city: "Kathmandu"
};

console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);  // using objectName.propertyName 

// Displaying properties in a loop: properties of object can be collected in a loop.
// Build a text 
let text = "";
for(let x in person){
  text += person[x] + " ";
};
console.log(text);  // only displays the values, not the key. i.e Bimal 23 Kathmandu

// Note: You must use person[x] in the loop. person.x will not work (Because x is the loop variable).

// Using Object.values(): Object.values() creates an array from the property values:
const myArray = Object.values(person);
console.log(myArray); // Outputs an array with only properties without keys. i.e ['Bimal', 23, 'Kathmandu']

// Using Object.entries(): Object.entries() makes it simple to use objects in loops
const fruits = {banana: 300, apple: 550, orange: 150};

let text1 = "";
for(let[fruit, price] of Object.entries(fruits)){
  text1 += fruit + " : " + price + "\n";
}
console.log(text1);


// Using JSON.stringify(): JavaScript objects can be converted to a string with JSON method JSON.stringify().
// Note: The result will be a string written in JSON notation: {"name":"John","age":50,"city":"New York"}
 
// stringify Object:
let myString = JSON.stringify(person);
console.log(`Stringified JS object: ${myString}`);

// Object constructor function: Sometimes we need to create many objects of the same type. To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.
function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = "Brown";  // A value given to a property will be a default value for all objects created by the constructor:
  this.fullName = function(){
    return this.firstName + " " + this.lastName;  // Constructor function method 
  };
}
// Note: In the constructor function, this has no value. The value of this will become the new object when a new object is created.
// Now we can use new Person() to create many new Person objects:Now we can use new Person() to create many new Person objects:
const mySister = new Person("Rohini", "Paudel", 31);
const mySelf = new Person("Bimal", "Paudel", 23);
const myBrother = new Person("Nirmal", "Paudel", 21);
console.log(mySister);
console.log(`My sister's full name is ${mySister.fullName()}.`);   // accessing the object function method.


// Built-in JavaScript Constructors
// JavaScript has built-in constructors for all native objects:
//new Object()   # A new Object object
// new Array()    # A new Array objects
// new Map()      # A new Map object
// new Set()      # A new Set object
// new Date()     # A new Date object
// new RegExp()   # A new RegExp object
// new Function() # A new Function object


// NOTE: The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.


// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().

 // "";           # primitive string
// 0;            # primitive number
// false;        # primitive boolean

// {};           # object object
// [];           # array object
// /()/          # regexp object
// function(){}; # function
