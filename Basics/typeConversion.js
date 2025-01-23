// JavaScript variables can be converted to a new variable and another data type: i) By the use of a JavaScript function
// ii) Automatically by JavaScript itself

// Converting Strings to Numbers

// The global method Number() converts a variable (or a value) into a number. A numeric string (like "3.14") converts to a number (like 3.14).
// An empty string (like "") converts to 0. A non numeric string (like "John") converts to NaN (Not a Number).
Number("3.14")  // 3.14 
Number(Math.PI)  // 3.1415
Number(" ")   // 0
Number("")    // 0


// Converting Numbers to Strings. The global method String() can convert numbers to strings. 
// It can be used on any type of numbers, literals, variables, or expressions:
// The Number method toString() does the same. 
Number(true);   // 1 
Number(false);   // 0 
false.toString();   // "false"
true.toString(); // "true"
String(false); // "false"
String(true); // "true"


// Automatic Type Conversion: When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
// The result is not always what you expect:
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2 

// Boolean type conversion:
// String to boolean:
let text = "";
Boolean(text);    // returns false since there's nothing in the text (empty string), empty string is converted to 'false'.

text = "Hello";
Boolean(text);   // non-empty strings are evaluated as true.

// string to boolean conversion is used to check whether user typed something or not, if boolena returns 'fasle' then given string (user input) is empty, otherwise user has typed sth.

