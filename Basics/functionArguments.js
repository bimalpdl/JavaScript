// If a function is called with missing arguments (less than declared), the missing values are set to undefined.
// Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
function sum(x, y) {
  if(x === undefined ) {    // if value of x is not missing(missing values are undefined as default) then assign it as 0.
    x = 0;
  }
  if (y === undefined) {
    y = 0;
  }
    return x + y;
}

console.log(sum()); // 0 
console.log(2 + 5); // 7

// default function parameter:
function greet(name = "Sir / Ma'am") {    // if name is missing then 'sir / ma'am is assigned to name.
  return `Hello ${name}, how are you doing today?`;
}

console.log(greet("Bimal"));   // Hello Bimal, how are you doing today?
console.log(greet());  // Hello Sir / Ma'am, how are you doing today?


// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function addNums(...args) {   // addNums can accept variable number of arguments
  let sum = 0;
  for(let arg of args) sum += arg;    // we can declare for loop this way as well.
  return sum;
}

console.log(addNums(2, 3,6));  // 11    # 3 arguments here.
console.log(addNums(2, 3,6, 18, 197));   // 226    # 5 arguments here.

// JavaScript functions have a built-in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called (invoked).

function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(`Among ${5, 1, 15}, '${findMax(5, 1, 15)}' is the greatest.`); 










