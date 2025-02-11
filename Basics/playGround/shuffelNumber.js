// The code generates random shuffel for music player: 
const prompt = require("prompt-sync")();    // to take input from terminal
let totalSongItems = Number(prompt("Enter total number of songs: "));
const alreadyPlayed = [];
let replay = 0;

function randomNumGenerator(total) {
  // function that generates random number 
  return Math.floor(Math.random() * total) + 1;
}

do {
  randNum = randomNumGenerator(totalSongItems);
  if(alreadyPlayed.includes(randNum)) {
    //'if( randNum in alreadyPlayed)' doesn't apply here to check any duplicates present in the array;
    //since 'in' operator checks  ' if a property exists in an object or an index exists in an array, not whether an array contains a value.'
    continue;
  }
  else {
    alreadyPlayed.push(randNum);
    replay++;
  }

} while(replay < totalSongItems);

console.log(`Shuffled playlist: `);
console.log(alreadyPlayed);


// NOTE: To check whether an array contains a value, use 'includes()' method, like:'arrayName.includes(valueToCheck)'
