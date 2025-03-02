// TODO: last line of code is broken fix it
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [5, 6, 7, 8];
const combinedArray = [...firstArray, ...secondArray];
console.log(`Elements in firstArray: ${firstArray}`);
console.log(`Elements in secondArray: ${secondArray}`);
console.log(`Elements in combinedArray: ${combinedArray}`);   // 1, 2, 3, 4, 5, 5, 6, 7, 8, 

// The spread operator is often used in combination with destructuring.
const names = ["Eren", "Levi", "Armin", "Mikasa", "Arwin"];
const [mainChar, fighter, ...others] = names;
console.log(`Elements in names array: ${names}`);
console.log(`mainChar: ${mainChar}, fighter: ${fighter}, others: ${others}`);
// mainChar: Eren, fighter: Levi, others: Armin,Mikasa,Arwin


// we can use spread operator with objects too.
const myVehicle = {
  brand: "Build your dream", 
  model: "Evergreen-x",
  color: "Gray"
}

const updatedMyVehicle = {
  type: 'Electric car', 
  color: "Black",
  mfd: 2024
}
 // Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now black.
const myUpdatedVehicle = {... myVehicle, ...updatedMyVehicle};
// console.log(`myVehicle: ${myVehicle}, updatedMyVehicle: ${updatedMyVehicle}, myUpdatedVehicle: ${myUpdatedVehicle}.`);
console.log("My vehicle: ");
for (let key in myVehicle) {
  console.log(`${key} : ${myVehicle[key]}`);
}
console.log();
console.log("updatedMyVehicle: ");
for (let key in updatedMyVehicle) {
  console.log(`${key}: ${updatedMyVehicle[key]}`);
}
console.log();
console.log("myUpdatedVehicle using spread operator: ");
for (let key in myUpdatedVehicle) {
  console.log(`${key}: ${myUpdatedVehicle[key]}`);
}
