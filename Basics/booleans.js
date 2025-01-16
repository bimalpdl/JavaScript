//You can use the Boolean() function to find out if an expression (or a variable) is true:
// Everything With a "Value" is True:
console.log(`"100 is "  ${Boolean(100)}
"3.14 is " ${Boolean(3.14)}
"-15 is " ${Boolean(-15)}
"Any (not empty) string is " ${Boolean("Hello")}
"Even the string 'false' is " ${Boolean('false')}
"Any expression (except zero) is " ${Boolean(1 + 7 + 3.14)};`);  // false

// Everything Without a "Value" is False.
console.log(`Boolean(x): ${Boolean(0)}`);  // false; also applicable for -0. 
console.log(`Boolean(y): ${Boolean("")}`); // false;  Boolean value of empty string is falso.
console.log(`Boolean(null): ${Boolean(null)}`);  // false; Boolean of 'null' is false.
let x;
console.log(`Boolean(x): ${Boolean(x)}`); // false; Boolean value of undefined is false.
console.log(`Boolean(10/"Bimal"): ${Boolean(10/"Bimal")}`); // false; Boolean value of NaN is false.


// Comparison operators in JS:
let a = 5;
console.log(`value of a = 5`);
console.log(`a == 8: ${a == 8}`);
console.log(`a == 5: ${a == 5}`);
console.log(`a == '5': ${a == '5'}`);
console.log(`a === 5: ${a === 5}`);
console.log(`a === '5': ${a === '5'}`);
console.log(`a != 8: ${a != 8}`);
console.log(`a !== 5: ${a !== 5}`);
console.log(`a !== "5": ${a !== "5"}`);

let age = 23;
if (age < 18) text = "You're still a minor.";
if (age > 18) text = "You're an adult, you can vote now.";
console.log(text);

// Conditional Ternary operator:  variablename = (condition) ? value1:value2 
let votable = (age < 18)? "You're too young": "You're old enough to vote."
console.log(votable);

// Comparing Different Types: Comparing data of different types may give unexpected results.
// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
// An empty string converts to 0. A non-numeric string converts to NaN which is always false.

console.log(`2 < 12: ${2 < 12}`);
console.log(`2 < "12": ${2 < "12"}`);
console.log(`2 < "Bimal": ${2 > "Bimal"}`);
console.log(`2 > "Bimal": ${2 > "Bimal"}`);
console.log(`"2" < "12": ${"2" < "12"}`);
console.log(`"2" > "12": ${"2" > "12"}`);
console.log(`"2 == 12": ${2 == 12}`);
// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

// To secure a proper result, variables should be converted to the proper type before comparison:
let age1 = Number(age);   // although age is already a number, this is how to explicitly specify the number.
console.log(`Type of age: ${typeof(age)}, type of age1: ${typeof(age1)}`);
if (isNaN(age1)){
  votable1 = "Input is not a number.";
}
else{
  votable1 = (age < 18)? "You're too yound kid!": "You're old enough sir.";
}
console.log(votable1);


// The Nullish Coalescing Operator (??): The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.
let name = null;
let text1 = "missing";
let result = name ?? text1;  // result = "missing"; since first argument is null.
console.log(`The name is ${result}.`);   // The name is missing.

// The Optional Chaining Operator (?.): The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type: "Fiat", model:"500", color:"white"};
console.log(`Car type: ${car.type}`); // Car type: Fiat 
console.log(`Car name: ${car?.name}`);  // name 


























