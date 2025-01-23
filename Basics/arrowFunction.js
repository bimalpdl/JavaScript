// Arrow functions allow us to write shorter function syntax:
let myFunction = (a,b) => a * b;     // function takes two arguments and returns their product.
console.log(myFunction(2,5));   // 10

// syntax: var = () => { return something; }
let greet = () => {
  return "Hello there!";
}
console.log(greet());

// If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
let greet1 = () => "Hello World";      // Arrow Functions Return Value by Default:
console.log(greet1());
// Note: This works only if the function has only one statement.


// If you have parameters, you pass them inside the parentheses:
let fullName = (firstName, lastName) => `Hello ${firstName} ${lastName}!`;
console.log(fullName("Rohini", "Paudel"));
// if you have only one parameter, you can skip the parentheses as well:
let greet2 = puraNaam => `Hello ${puraNaam}.`;
console.log(greet2("Bimal Paudel"));   // Hello Bimal Paudel.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.



