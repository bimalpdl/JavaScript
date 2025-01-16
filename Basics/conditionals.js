let time = Math.floor(Math.random() * 25);  // generates random number smaller than 25.
let greeting;
console.log(typeof(greeting));
if (time < 12){
  greeting = "Good morning!";
}

else if (time < 17) {
  greeting = "Good afternoon!";
}

else if (time < 20) {
  greeting = "Good evening!";
}
else {
  greeting = "Good night!";
}
console.log(typeof(greeting));
console.log(`It's ${time} O'clock, ${greeting}.`);

// switch statement: The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.

let day = Math.floor(Math.random() * 8);
switch (day){
  default:   // The default case does not have to be the last case in a switch block:
    // If default is not the last case in the switch block, remember to end the default case with a break.
    day = "Which day was it again?";
    break;

  case 1:
    day = "It's sunday baby!";
    break;
  case 2:
    day = "It's monday pal!";
    break;
  case 3:
    day = "Is it tuesday??";
    break;
  case 4:
    day = "Ohh, finally mid-week, it's wednesday baby!";
    break;
  case 5:
    day = "Hurreyy, it's almost saturday. Today is thursday BTW.";
    break;
  case 6:
    day = "Tomorrow is saturday, let's have fun.";
    break;
  case 7:
    day = "Why does weekend pass so fast?";
    break;   // It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
 }

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

console.log(day);

let day1 = Math.floor(Math.round() * 8);
switch(day1){
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";   // we haven't used any break here since it is the last case and switch case will break automatically.
}
console.log(text);

// In the example above, case 4 and 5 share the same code block, and 0 and 6 share another code block:


// Switch cases use strict comparison (===). The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.
let x = "0";
switch (x) {
  case 0:
    text1 = "Off";
    break;
  case 1:
    text1 = "On";
    break;
  default:
    text1 = "No value found";
}
console.log(text1);  // No value found.

