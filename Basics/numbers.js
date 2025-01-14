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
console.log("The result is " + num3 + num4);  // The result is 1020 (since 'The result is ' is a string.)

let num5 = "30";
console.log(num3 + num4 + num5); // 3030
// The JavaScript interpreter works from left to right. First 10 + 20 is added because num3 and num4 are both numbers.

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


// JavaScript integers are only accurate up to 15 digits, JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// To create a BigInt, append n to the end of an integer or call BigInt():
let firstBitInt = 9999999999999999n;
let secondBigInt = 1234567890123456789012345n;
let thirdBigInt = BigInt(1234567890123456789012345)

console.log(`Type of firstBingInt is ${typeof(firstBitInt)}`);  // bigint

// BigInt is the second numeric data type in JavaScript (after Number).
// Operators that can be used on a JavaScript Number can also be used on a BigInt. But performing arithmetic operations between BigInt and number type is not allowed since type conversion may lose information.
// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

// BigInt can not have decimals.
let numb = 5n;  // a bigInt 
// let numb1 = x / 2;    # // Error: Cannot mix BigInt and other types, use explicit conversion.
let numb1 = Number(numb) / 2;  // Division between bigInt and number using type conversion.
console.log(numb1);  // 2.5


// max and min properties to the Number object using 'MAX_SAFE_INTEGER' and 'MIN_SAFE_INTEGER' properties.
console.log(`MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);
console.log(`MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`);  

// The Number.isInteger() method returns true if the argument is an integer.
console.log(`Number.isInteger(10): ${Number.isInteger(10)}`);  // true
console.log(`Number.isInteger(10.59): ${Number.isInteger(10.59)}`);  // true
console.log(`Number.isSafeInteger(10): ${Number.isSafeInteger(10)}`);  // true
console.log(`Number.isSafeInteger(12345678901234567890): ${Number.isSafeInteger(12345678901234567890)}`);  // false


// Number methods: The toString() method returns a number as a string.
let numb2 = 15;
let numb3 = numb2.toString();
console.log(`Type of numb2: ${typeof(numb3)}`);  // string

// toExponential() returns a string, with a number rounded and written using exponential notation. A parameter defines the number of characters behind the decimal point:
let pi = 3.1415;
console.log(pi.toExponential(2));  // 3.14e+0
console.log(pi.toExponential(4)); // 3.1415e+0
console.log(pi.toExponential(3));  // 3.142e+0 


// toFixed() returns a string, with the number written with a specified number of decimals:
let xy = 9.656;
console.log(`The value of xy: ${xy}`); // 9.656
console.log(`xy.toFixed(0): ${xy.toFixed(0)}`);  // 10
console.log(`xy.toFixed(2): ${xy.toFixed(2)}`);  // 9.66
console.log(`xy.toFixed(4): ${xy.toFixed(4)}`);  // 9.6560
console.log(`xy.toFixed(6): ${xy.toFixed(6)}`);  // 9.656000

// toPrecision() returns a string, with a number written with a specified length:
let xyz = 8.659
console.log(`The value of xyz: ${xyz}`); // 8.659
console.log(`xyz.toPrecision(0): ${xyz.toPrecision()}`);  // 8.659
console.log(`xyz.toPrecision(2): ${xyz.toPrecision(2)}`);  //  8.5
console.log(`xyz.toPrecision(4): ${xyz.toPrecision(4)}`);  // 8.659
console.log(`xyz.toPrecision(6): ${xyz.toPrecision(6)}`);  // 8.65900


// There are 3 JavaScript methods that can be used to convert a variable to a number: i) Number(), ii) parseFloat(), iii) parseInt().They are global JS methods.
// The Number() method can be used to convert JavaScript variables to numbers; If the number cannot be converted, NaN (Not a Number) is returned.
console.log(`Number(true): ${Number(true)}`);  // 1
console.log(`Number(false): ${Number(false)}`);  // 0
console.log(`Number("10"): ${Number("10")}`);  // 10
console.log(`Number("   10  "): ${Number("  10  ")}`);  // 10
console.log(`Number("10.33"): ${Number("10.33")}`);  // 10.33
console.log(`Number("10,33"): ${Number("10,33")}`);  // NaN
console.log(`Number("10 33"): ${Number("10 33")}`);  // NaN
console.log(`Number("Bimal"): ${Number("Bimal")}`);  // NaN

// Number() can also convert a date to a number. The Date() method returns the number of milliseconds since 1.1.1970.
console.log(`Number(new Date("2001-11-30")): ${Number(new Date("2001-11-30"))}`);

// Number Methods Cannot be Used on Variables: The number methods above belong to the JavaScript Number Object.
// These methods can only be accessed like Number.isInteger(). Using X.isInteger() where X is a variable, will result in an error:
// TypeError X.isInteger is not a function.


// JS number Properties: Number Properties Cannot be Used on Variables. Number properties belong to the JavaScript Number Object.
// These properties can only be accessed as Number.MAX_VALUE. Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
// let x = Number.MAX_VALUE;   # this is return undefined.

console.log(`Number.EPSILON: ${Number.EPSILON}`);
console.log(`Number.MAX_VALUE: ${Number.MAX_VALUE}`);  // Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
console.log(`Number.MIN_VALUE: ${Number.MIN_VALUE}`);  // Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);  // Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
console.log(`Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Number.POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}`);
console.log(`2 / 0 = ${ 2 / 0}`);
console.log(`Number.NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}`);
console.log(`-2 / 0 = ${ -2 / 0}`);
console.log(`Number.NaN = ${Number.NaN}`);
console.log(`10 / "Bimal" = ${10 / "Bimal"}`);











