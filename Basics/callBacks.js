// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
//
const prompt = require("prompt-sync")();
function displayResult(value) {   // first function definition; it simply displays the value that is passed as parameter
  console.log(`The value is ${value}`);
}

function sum (a, b) {    // second function definition; returns sum of received parameters.
  return a + b;
}

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");
let result = sum(Number(num1), Number(num2));   // storing the sum returned by sum() function.
displayResult(result);   // printing the value using displayResult() function.

// above example is the conventional way of using multiple function calls but it can be improved as:

function add(num1, num2) {
  let result = num1 + num2;
  displayResult(result);     // invoking another function form one function body;
}

let firstNum = prompt("Enter first number: ");
let secondNum = Number(prompt("Enter second number: "));
add(Number(firstNum), secondNum);

// The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.


// JS callback function: A callback is a function passed as an argument to another function.


 function greet(name) {
   console.log(`Hello ${name}! How are you doing today?`);
 }

function fullNameGreet(firstName, lastName, myCallBack) {
  let fullName = `${firstName} ${lastName}`;
  myCallBack(fullName);
}

let fName = prompt("Enter your first name: ");
let lName = prompt("Enter your last name: ");
fullNameGreet(fName, lName, greet);   
// the actual function 'greet' is passed as an argument here, note that when invoking the function parethesis isn't used.
// In the example above, 'greet' is called callback function which is passed as an argument to the function fullNameGreet().

// NOTE: When you pass a function as an argument, remember not to use parenthesis. ie. 'fullNameGreet(fName, lName, greet())' is invalid.
