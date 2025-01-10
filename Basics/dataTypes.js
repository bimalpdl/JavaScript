// JavaScript has 8 data types: i) String, ii) Number, iii) Bigint, iv) Boolean, v) Undefined, vi) Null, vii) Symbol, viii) Object
//The object data type can contain both built-in objects, and user defined objects:

//Built-in object types can be:
//objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

// Number types:
// All JavaScript numbers are stored as decimal numbers (floating point).Javascript numbers are always one type: i.e double (64-bit floating point).
// Numbers can be written with, or without decimals:
let num = 5, num1 = 10.67;
console.log(`${num}\n${num1}`);

// String type: Strings are written with quotes. You can use single or double quotes:
let color = "Maroon";
let greeting = 'Hello there!';

// Boolean:
let isStudent = true;
let isDumb = false;
console.log(`Is student?: ${isStudent}\nIs dumb? ${isDumb}`);

// object:JavaScript objects are written with curly braces {}.
//Object properties are written as name:value pairs, separated by commas.
const person = {firstName: "Bimal", lastName: "Paudel"};
console.log(`Object type: ${person}`);

// Array object:
const bikes = ["KTM Duke", "Pulsar NS200", "MK15"];
console.log(`Array Object: ${bikes}`);

// Date object:
const date = new Date("2025-01-08");
console.log(`Date Object: ${date}`);

// Undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let serverName;   // Value is undefined, type is undefined 
console.log(typeof(serverName));  // Undefined
// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
serverName = undefined;  // Value is undefined, type is undefined 


// NOTE: JS variable can hold any kind of data.

// When adding a number and a string, JavaScript will treat the number as a string.
let x = "Hello" + 16;
console.log(x); // Hello16     => It will treat above expression like "Hello" + "16"

let z = "Hello" + 16 + 4;
console.log(z);  // Hello164

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let y = 16 + 4 + "Hello";
console.log(y); // 20Hello => Since value is number type, they are added first then the resultant is concatenated with string 'Hello' which produces final result as:
// '20Hello'

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let a;  // 'undefined' data type initially
console.log(typeof(a));  // Undefined

a = 10;  // now it is 'number' type
console.log(typeof(a));  // number

a = "Hello There!";
console.log(typeof(a)); // string


// Empty Values: An empty value has nothing to do with undefined.An empty string has both a legal value and a type.
let car = "";  // The value is "", the typeof is "string" 
console.log(car);  // string 
























