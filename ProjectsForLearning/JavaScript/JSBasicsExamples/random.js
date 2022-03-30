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

// Code Challenge (Love Calculator)
/*
console.log("Welcome to the Love Calculator!");

// get user names
var firstUser = prompt("Enter the first user:");
var secondUser = prompt("Enter the second user:");

// calulate random love percentage
var randNum = Math.random();

// set random value between 1 and 100
randNum *= 100;
randNum = Math.round(randNum) + 1;

// return to user
console.log("Between " + firstUser + " and " + secondUser + ", the love connection is " + randNum + "%!");
*/

