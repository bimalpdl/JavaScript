// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user a question
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close(); // Close the interface
});





// another approach:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
