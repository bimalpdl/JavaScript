// It is a common practice to declare arrays with the const keyword.
const cars = ["Tesla", "BYD",    // array declared using array literal.
      "Toyota", "Audi"];   // array can be declare in multilne
cars[4] = "TATA";
cars[1] = "Honda";  // changing the first array element;

const names = new Array("Bimal", "Rohini", "Nirmal", "Matrika");    // this way is less commonly used, for simplicity readablity and execution speed use array literal, this can also produce some unexpected results.
console.log(`Array elements in 'cars': ${cars}`);  // outputs may look different while displaying it with string (may be it implicitly converts array to string.)
console.log(`Array elements in 'names':`);
console.log(names);   // [ 'Bimal', 'Rohini', 'Nirmal', 'Matrika' ]

console.log(`The first element in names array is: ${names[0]}`);  // accessing the array using index number.

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(names.toString());   // Bimal,Rohini,Nirmal,Matrika

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
console.log(typeof(cars));   // object

const person = ["Bimal", "Paudel", 23];
console.log(person[0]);  // Bimal   # accessing the first element of array using array index.
console.log(person[person.length - 1]);  // 23   # accessing the last element of array using array index.



// Array Elements Can Be Objects: JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array. You can have objects in an Array.
// You can have functions in an Array. You can have arrays in an Array.
function myFunction(){
  console.log("myFunction method is called!!");
}
const myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = cars;

console.log(myArray);

console.log(`Length of the array 'cars' is: ${cars.length}`);  // returns the number of elements in the array
console.log(`Original cars array: ${cars}`);
console.log(`Sorted cars array: ${cars.sort()}`);  // Sorts the array in ascending order

// Looping through an array using for loop:
for(let i = 0; i < names.length; i++) {
  console.log(`${i} element in the array names is: ${names[i]}`);
}

// push() can be used to add an element at the end of an arry:
names.push("Ranjita");
// we can also use length property to add new element in an array:
names[names.length] = "Sujata";
console.log(names);

// WARNING ! ::: Adding elements with high indexes can create undefined "holes" in an array:
names[8] = "Indira";  // creates 'undefined' holes in names since names only had 6 elements in it (index 6 and 7 are still empty/undefined)
 
// JavaScript does not support associative array like in PHP, it only supports indexed array. Trying to create array with named index(key) will redefine array to an object after that some array properties and methods will produce incorect result.
// The main difference between JS array array and JS objects use named index while array use numbered indexes.

// the 'typeof()' operator also returns array as an object so to identify the array we use 'Array.isArray()' method or 'instanceOf Array'
console.log(`Is names array or object?: ${Array.isArray(names)}`);   // true
console.log(`Is names array or object?: ${names instanceOf Array}`);  


