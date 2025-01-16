/* JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
*/ 
// The for statement creates a loop with 3 optional expressions: for (expression 1; expression 2; expression 3){  // loop body }
// You can omit expression 1 when your values are set before the loop starts:
let i = 2;
for(;i < 6; i++){
  console.log(i);  //  2 3 4 5
}

// You can intiate many values in expression 1 (separated by comma):
const cars = ["BMW", "Tesla", "Toyota", "BYD", "Honda"];
let len1;
for(let i = 0, len1 = cars.length; i < len1; i ++){
  console.log(`car ${i}: ${cars[i]}.`);
}











