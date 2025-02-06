// TODO: setInterval is buggy, fix it.
// myFunction is passed to setTimeout() as an argument. eg: setTimeout() function.
// In the real world, callbacks are most often used with asynchronous functions.

const prompt = require('prompt-sync')();
setTimeout(myFunction, 2000);     // myFunction is passed to setTimeout() as an argument. 

function myFunction() {      // myFunction is used as a callback 
  console.log("Hello there!!");
}


let naam = prompt("Eneter your name: ");
// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
setTimeout(function() {myFunction1(naam);}, 2000);      // IDK why 'function() {myFunction1()};' is used.

function myFunction1(name) {
  console.log(`Hello ${name}, how are you doing today?`);
}



// Waiting for intervals: 
setInterva(myFunction2, 2000);

// When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
function myFunction2() {
  let d = new Date();
  console.log(`${d.getHours()} ${d.getMinutes()} ${d.getSeconds();}`);
}
 

// rather than using callbacks, developers these day prefer to use 'promises'
