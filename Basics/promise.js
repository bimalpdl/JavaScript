const prompt = require("prompt-sync")();
// "Producing code" is code that can take some time. "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code.
// A Promise contains both the producing code and calls to the consuming code:A Promise contains both the producing code and calls to the consuming code:
/* When the producing code obtains the result, it should call one of the two callbacks: i) Success	myResolve(result value)
ii) Error	myReject(error object)

A JavaScript Promise object can be:

    Pending
    Fulfilled
    Rejected

The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.


You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.



Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.
*/ 

function displaySth(sth) {
  console.log(sth);
}

let myPromise = new Promise(function(myResolve, myReject) {
   // "Producing Code" (May take some time)
  let x = prompt("Enter x: 0 = OK, Error otherwise: ");
  if(Number(x) === 0) {
    myResolve("OK");    // when successfull
  }
  else {
    myReject("Error");    // when error
  }

} );


// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {displaySth(value);},   // code if successfull
  function(error) {displaySth(error);}   // code if some error
);


// JS promise example (waiting for a timeout):
let myPromise1 = new Promise(function(mySuccess, myFailure) {     // myPromise object that accepts two callback functions i.e mySuccess and myFailure.
setTimeout(() => mySuccess("Hello there, I am waiting for timeout promise example."), 3000);    // invoking the mySuccess callback function.
});

myPromise1.then(function(returnValue) {      // consumer funtion 
  console.log(returnValue);
},
function(errorMessage) {
  console.log(errorMessage);
}
)
