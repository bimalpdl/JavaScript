// JavaScript has only one type of number. Numbers can be written with or without decimals.
let num1 = 3;
let num2 = 3.14;

// JavaScript Numbers are Always 64-bit Floating Point.
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
console.log(`x: ${x}\ny:${y}`);
// The maximum number of decimals is 17.

// Floating point arithmetic is not always 100% accurate:
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`);  // 0.30000000000000004

// '+' operator is used for both addition and concatenation, numbers are added and strings are concatenated.
let num3 = 10;
let num4 = 20;
console.log("The result is " + num3 + num4);  // The result is 1020

let num5 = "30";
console.log(num3 + num4 + num5); // 3030
// The JavaScript interpreter works from left to right. First 10 + 20 is added because x and y are both numbers.

// Apart from '+', JS will try to do mathematical operations on numbers which are defined as string.
let num6 = "100";  // string
let num7 = "10";  // string
console.log(`Type of num6("100"): ${typeof(num6)}\nType of num7("10"): ${typeof(num7)}`);
console.log(`${num6} / ${num7} = ${num6 / num7}`);
console.log(`${num6} * ${num7} = ${num6 * num7}`);
console.log(`${num6} - ${num7} = ${num6 - num7}`);

// NaN - Not a Number: NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
console.log(`10 / "Apple": ${10/"Apple"}`); // NaN

// You can use the global JavaScript function isNaN() to find out if a value is a not a number:
console.log(`Is 10 / "Apple" NaN?: ${isNaN(10/"Apple")}`);  // true
//  If you use NaN in a mathematical operation, the result will also be NaN:
let num8 = NaN;
console.log(`${num3} + ${num8} = ${num3 + num8}`);  // NaN

console.log("5" + num8 ); // 5NaN

// NOTE: NaN is a number: typeof NaN returns number 
console.log(typeof(NaN)); // number 

console.log(2 / 0);  // Infinity
// NOTE: Infinity or -Infinity is a number: typeof(Infinity) returns number.

// Similar to strings, numbers can also be defined as Object using new keyword but is not recommended to do so, since it can behave unexpectedly like string defined as an object.
let number1 = new Number(123);
console.log(`Type of ${number1}: ${typeof(number1)}`);








