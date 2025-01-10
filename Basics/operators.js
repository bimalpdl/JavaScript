// operators in JS:
// Different types of operators in JS are: (Arithmetic, Assignment, Comparison, string, logical, bitwise, ternary, Type) operator.
// Types of Arithmetic operators => '+', '-', '*', '/', '%', '++' (increment), '--' (decrement), '**' (exponentiation).
// Types of Assignment operators => '=', '+=', '-=', '*=', '/=', '%=', '**='.

// Types of Comparison operators => '==' (equal to), '!=', '<', '>', '<=', '>=','===' (equal value and equal type), '!==' (not equal value or not equal type), '?' (ternary operator).

// Stirng concatenation operator => '+', '+='.
let text = "John";
let text1 = "Doe";
let text2 = text + " " + text1;
console.log(text2);   // John Doe 

// use of '+=' operator in string concatenation:
let text3 = "Hello there, ";
text3 += "Have a nice day!";
console.log(text3);   // Hello there, have a nice day!
// NOTE: If you add string and number, the result will be stirng.
// eg: "hello" + 4 => hello5 (a stirng).


// Logical operators in JS => '&&' (logical and), '||' (logical or), '!' (logical not).


// Type operators in JS: => i) typeof() => returns the type of a variable.
// ii) instanceof() => Returns true if an object is an instnce of an object type.

// Bitwise operators in JS: Bit operators work on 31 bit numbers. Any numeric operand in the opeartion is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Bitwise operators: '&' (AND), '|' (OR), '~' (NOT), '^' (XOR), '<<' (left shift), '>>' (right shift), '>>>' (unsigned right shift).

let a = 100;
let expn = (35 * 5) + a;  // example of expression.
console.log(expn);

let b = a ** 2;
console.log(b);  // 10000
/*
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
When using parentheses, the operations inside the parentheses are computed first.
When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right.
*/ 

// While combining operators, there must not be whitespaces inbetween. eg: '<<=' is valid but '<< =' is not. This applies for all other operators too,

// Additional assignment operators => i) shift assignment operators, ii) Bitwise assignment operators, iii) Logical assignment operators.
// Shif assignment operators=> '<<=' eg: 'x <<= y' is same as 'x = x << y',
// '>>=' eg: 'x >>=y' is same as 'x = x >> y',
// '>>>=' eg: 'x>>>=' is same as 'x = x >>> y';

// Bitwise assignment operators: '&=' eg: 'x &= y' is same as 'x = x & y'
// '|=' eg: 'x |= y' is same as 'x = x | y'
// '^=' eg: 'x ^= y' is same as 'x = x ^ y'


// Logical assignment operators: '&&=' eg: 'x && y' is same as 'x = x &&(x =y)'
//  '||=' eg: 'x || y' is same as 'x = x ||(x =y)'
//  '??=' eg: 'x ?? y' is same as 'x = x ??(x =y)' 

//The Nullish coalescing assignment operator (??=) is used between two values. If the first value is undefined or null, the second value is assigned.
let notAssignedValue;
notAssignedValue ??= 5;
console.log(notAssignedValue); // 5 

