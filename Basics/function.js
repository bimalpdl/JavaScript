// A JavaScript function is a block of code designed to perform a particular task.
function greet(name) {  // parameter(s):Function parameters are listed inside the parentheses () in the function definition.

  return `Hello ${name}, How are you doing today?`; // Inside the function, the arguments (the parameters) behave as local variables.
}

console.log(greet("Rohini"));  // argument(s): Function arguments are the values received by the function when it is invoked.

function toInch(param) {
  return 0.6 * param;
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// You can use the function directly, as a variable value:
let text1 = "The temperature is " + toCelsius(77) + " Celsius";


// Local Variables: Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName 






