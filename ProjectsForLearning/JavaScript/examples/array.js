// JAVASCRIPT ARRAYS

// Example
var guestList = ["Mahmoud", "Jack", "Pam", "Angela", "Lara"];

console.log(guestList);

// Print single index of array
console.log(guestList[0]); // First index
console.log(guestList[guestList.length - 1]); // Last index

// Multi Dimensional Arrays

const multiArray = [["Mahmoud", 1], ["Elsayed", 2], ["Shabana", 3], ["Other Aliases", ["Moon", 4]]];

console.log(multiArray[0]); // Output: "Mahmoud", 1
console.log(multiArray[1][1]); // Output: 2
console.log(multiArray[3][1][0]); // Output: Moon

// Includes method

const testArray = [1, 2, 3, 4, 5, 6];

console.log(testArray.includes(2)); // Output: true;
console.log(testArray.includes(6)); // Output: true;
console.log(testArray.includes(8)); // Output: false;

// Code Challenge: Used what we learn
const prompt = require('prompt-sync')(); // this is installed from npm, needed for user input

var guestName = prompt("Please enter you name: ");

if (guestList.includes(guestName)) {
    console.log("We welcome you, " + guestName + ", as our guest!");
} else {
    console.log("Im sorry " + guestName + ", it appears you are not on the guest list.");
}

// Messing with readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("What is your name?", name =>{
    console.log(`Hey there ${name}!`); // must use `` to use format in js
    readline.close();
})