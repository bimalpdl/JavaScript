// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.
let num = "4";
let output = "Input is:";
try {
  if(num.trim() == "") throw "Empty!!";
  if(isNaN(num)) throw "not a number";
  num = Number(num);
  if (num < 5) throw " too small.";   // The exception (err) is caught by the catch statement and a custom error message is displayed:
  if(num > 15) throw " too large";
}
catch(err) {
  console.log(`${output} ${err}`);   // Input is: too small.
}

finally {
  console.log("Finally block always gets executed regardless of any try / catch outcome.");
}
// The exception can be a JavaScript String, a Number, a Boolean or an Object:
// throw 500; # Number,   throw true;  # boolean  etc.
// JavaScript will actually create an Error object with two properties: name and message.
// i.e   'err.name;' and 'err.message;'

let x = 100;
try {
  x += y;    // referance error, since y is never defined and assigned.
}
catch(err) {
  console.log(`Error name: "${err.name}", 
error message: ${err.message}`);   // error message property
}

try {
  console.looooog("Hello there!!");
}
catch(err) {
  console.log(`Error name: "${err.name}",
error message: ${err.message}`);   // error message property

}

// A SyntaxError is thrown if you try to evaluate code with a syntax error.
// A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.

