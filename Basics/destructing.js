// We may have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed

const names = ["Eren", "Mikasa", "Sasha", "Livy", "Armin"];
let [lead, brave, ,theGreatest, smart ] = names;     // it you don't need any field, you can leave it empty (in this case Sasha) but spaceholder (using comma) must be used.
console.log(typeof(theGreatest), theGreatest);    // string Eren 


// Destructuring comes in handy when a function returns an array:
function calc(x, y) {
  let add = x + y;  
  let subtract = x - y;
  let divide = x / y;
  let multiply = x * y;
  let exponent = x ** y;
  let modulus = x % y;

  return [add, subtract, divide, multiply, exponent, modulus]
}

const [addition, subtraction, division, multiplication, exponentation, modulus] = calc(5,10);
console.log(`5 ** 10 = ${exponentation}`);

// Destructuring Objects

const person = {
  fname: "Bimal", 
  lname: "Paudel",
  age: 23,
  gender: "Male",
  isStudent: true,

}
displayInfo(person); 

function displayInfo({gender, fname, age}) {   
// Notice that the object properties do not have to be declared in a specific order; also notice not all keys of the objects aren't used   
  console.log(`I'm ${fname}, and I'm a ${gender}. I'm ${age} years old.`);
}

// We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
const person1 = {
  fName: "John", 
  lName: "Doe",
  sex: "Male",
  age: 25,
  hasCars: true,
  Cars: {     // inner object
    carName: "Ford", 
    model: "Mustang",
    mfd: 2025
  }
}

function displayInformation({fName, sex, age, Cars: {carName, model}}) {
  return `Firstname: ${fName}, Sex: ${sex}, Age: ${age}. Car details => Brandname: ${carName}, model ${model}.`;
}

console.log(displayInformation(person1));
