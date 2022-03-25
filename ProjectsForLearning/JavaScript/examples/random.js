// JAVASCRIPT RANDOM

// using random
const n = Math.random();
console.log(n); // decimal b/w 0 - 1
// output is different everytime we run the script

// simulate a dice roll

let randNum = Math.random();
randNum *= 6; // six sided die
let dice = Math.floor(randNum) + 1; // we want values 1 - 6, not 0 - 5
console.log("Dice was rolled ... your result is: " + dice);
