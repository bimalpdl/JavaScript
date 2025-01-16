// The syntax for any Math property is : Math.property.
console.log(`Math.PI: ${Math.PI}`);
console.log(`Math.E: ${Math.E}`);    // Euler's number
console.log(`Math.SQRT2 ${Math.SQRT2}`); // square root of 2 

// The syntax for Math any methods is : Math.method(number)
// Math.round(x) returns the nearest integer:
console.log(`Math.round(Math.PI): ${Math.round(Math.PI)}`);  // 3
console.log(`Math.round(1.89): ${Math.round(1.89)}`);  // 2 

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(`Math.ceil(1.001): ${Math.ceil(1.001)}`);  // 2

// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(`Math.floor(1.9999): ${Math.floor(1.999)}`);  // 1

// Math.trunc(x) returns the integer part of x:
console.log(`Math.trunc(4.152): ${Math.trunc(4.152)}`);  // 4
console.log(`Math.trunc(-4.152): ${Math.trunc(-4.152)}`);  // -4
console.log(`Math.trunc(4.958): ${Math.trunc(4.958)}`);  //4

// Math.pow(x, y) returns the value of x to the power of y:
console.log(`Math.pow(2,3): ${Math.pow(2,3)}`);  // 8

// Math.sqrt(x) returns the square root of x:
console.log(`Math.sqrt(81): ${Math.sqrt(81)}`);  // 9

// Math.abs(x) returns the absolute (positive) value of x:
console.log(`Math.abs(-58.25): ${Math.abs(-58.25)}`);  // 58.25

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(`Math.random(): ${Math.random()}`);   // random number between 0-1 everytime (lower than 1 itself)

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.floor(Math.random() * 10));   // Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 200));   // Returns a random integer from 0 to 199:
console.log(Math.floor(Math.random() * 200) + 1);   // Returns a random integer from 0 to 200:









