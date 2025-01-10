// variables are declared in one of 4 ways: i) using 'let' , ii) using 'var' , iii) using 'const' iv) Automatically (without using any specific keywords.)
// Most preffered way of declaring variable in JS now a days is using either 'let' or 'const' though 'var' is also supported.

var name = "Bimal";
let age = 23;
const bio = `Name: ${name}, Age: ${age}`;
a = "variable declared without any keywords.";


// Variable declared using 'const' keyword can't be re-declared, reassigned and have block scope.
// Always declare a variable with const when you know that the value should not be changed.
/*
Use const when you declare:

    A new Array
    A new Object
    A new Function
    A new RegExp
*/

// We can not reassign constant value, constant array and constant object but we can change the elements of constant array, change the properties of constant objects.
//eg:
const cars = ["Audi", "Volvo", "BMW"];  // constant array
cars[0] = "Toyota";   // Changing the element; this is allowed
cars.push("TATA");
console.log(cars);

// cars = ["Honda", "BYD", "Tesla"];   # ERROR; this isn't allowed, since we are trying to reassign the constant array.

// why 'let' and 'const' are better than 'var' to declare variables?:
// => They have block scope, can't be 'redeclared', must be declared before use, does not bind to 'this', are not hoisted.

// Why using 'var' must be avoided?
// => 'var' doesn't have to be declared, var is hoisted (variable can be used even before declaration, and can be declare after using 'var'), var binds to 'this'.




// For interpolation of string (template literal), use them inside `` (inside backticks) and use ${varName here}. 
console.log(bio);
console.log(a);

// Variable names or identifiers can start with alphabets, underscore (_) or dollor sign ($).
let var1;
let _var1;
let $var1;
// JS is type sensitive so var1 and Var1 are different variables, also in the cases above all var1, _var1 and $var1 are different.

// typeof() method is used to check the type of the variable.
console.log(typeof(var1));



// You can declare many variables in one statement.
// Start the statement with let and separate the variables by comma:
let person = "John Doe", carName = "Volvo", price = 200;

//A variable declared without a value will have the value undefined.
let countryName;  // countryName here is type undefined.
console.log(typeof(countryName));

// Variable declared using 'var' keyword can be re-declared.
var gender = "Male";
var gender = "Female";   // this is valid

// Variable declared using 'let' or const keywords can't be re-declared.
let monthlyIncome = 1000000;
// let monthlyIncome = 2000000;  not valid, this will throw an error.

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let num = "5" + 2 + 3;
console.log(num);    // 523

  // but in this case first two integers are added then concatenated with string "3" making it 5+2 = 7 => 7 + "3" = 73. It is because the first value is integer.
let num1 = 5 + 2 + "3";
console.log(num1);  //73

