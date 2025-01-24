// The JSON format is syntactically identical to the code for creating JavaScript objects.
// JSON Syntax Rules: Data is in name/value pairs. Data is separated by commas. Curly braces hold objects.  Square brackets hold arrays.

// JSON data is written as name/value pairs, just like JavaScript object properties.
// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
// NOTE: JSON names require double quotes. JavaScript names do not. eg:  {"firstName" : "Bimal"}


// JSON arrays are written inside square brackets. Just like in JavaScript, an array can contain objects:
{   // JSON initialization:
  "siblings": [    // key siblings contains array of sibling's name.
    {"firstName" : "Rohini", "lastName" : "Paudel"},  // array elem1, array elements are separated by commas(,) as like in normal JS array.
    {"firstName" : "Bimal", "lastName" : "Paudel"},  // array elem2
    {"firstName" : "Nirmal", "lastName" : "Paudel"}  // array elem n

  ]
}

// JS string containing JSON syntax:
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
const obj = JSON.parse(text);
console.log(`${obj.employees[1].firstName} ${obj.employees[1].lastName}`);
