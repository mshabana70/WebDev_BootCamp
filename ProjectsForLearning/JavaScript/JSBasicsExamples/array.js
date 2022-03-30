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
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("What is your name?", name =>{
//     console.log(`Hey there ${name}!`); // must use `` to use format in js
//     readline.close();
// })

// FizzBuzz Problem 

console.log("\n/********* FizzBuzz Problem *********/\n");

// My solution

let outputArray = [];
for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        //console.log("FizzBuzz: " + i);
        outputArray.push(["FizzBuzz: ", i]);
    } else if (i % 3 == 0) {
        //console.log("Fizz: " + i);
        outputArray.push(["Fizz: ", i]);
    } else if (i % 5 == 0) {
        //console.log("Buzz: " + i);
        outputArray.push(["Buzz: ", i]);
    }
}

console.log(outputArray);

// Angela's Solution

let output = [];
var count = 1;

function fizzBuzz() {
    if ((count % 3 == 0) && (count % 5 == 0)) {
        output.push("FizzBuzz");
    } else if (count % 3 == 0) {
        output.push("Fizz");
    } else if (count % 5 == 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }  
    count++;
    //console.log(output);
}

// Call the function 100 times
for (let i = 1; i <= 100; i++) {
    fizzBuzz();
}

// Show array after it is populated
console.log(output);

// Code Challenge: Who's Buying Lunch?
console.log("\n/********* Who's Buying Lunch Problem *********/\n");

// Select a random name from an array of names.
// This person will be in charge of buying lunch.

let buyers = ["Mahmoud", "Angela", "Adam", "Sarah", "Robert", "Minju"];

function whosPaying(names) {
    let randomNum = Math.random() * names.length;
    randomNum = Math.floor(randomNum);

    return names[randomNum];
}

console.log(whosPaying(buyers));
console.log(whosPaying(buyers));


// LOOPS
console.log("\n/********* While Loops *********/\n");

// Lets refactor our fizzBuzz function using while loops
let output2 = [];
let count2 = 1;

function fizzBuzzWhile() {

    // Run code as long as count2 is less than or equal to 100
    while (count2 <= 100) {
        if ((count2 % 3 == 0) && (count2 % 5 == 0)) {
            output2.push("FizzBuzz");
        } else if (count2 % 3 == 0) {
            output2.push("Fizz");
        } else if (count2 % 5 == 0) {
            output2.push("Buzz");
        } else {
            output2.push(count2);
        }  
        count2++;
    }
    //console.log(output);
}

// Now we only need to run fizzBuzz once
fizzBuzzWhile();
console.log(output2);


// Beer on the wall challenge

// create a function the replicates the same 'bottles of beer on the wall'
// using a while loop.

let beers = 99;

function beerOnTheWall() {
    while (beers >= 0) {
        if (beers != 0) {
            console.log(`${beers} bottles of beer on the wall, ${beers} bottles of beer. Take 1 down, pass it around, ${(beers-1)} bottles of beer on the wall.\n`);
        } else  {
            console.log(`No more bottles of beer on the wall, No more bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.`);
        }
        beers--;
    }
}

// Call the function
beerOnTheWall();


console.log("\n/********* For Loops *********/\n");

// Lets refactor our fizzBuzz function using for loops

let outputFor = [];

function fizzBuzzFor() {

    // Run code as long as i is less than or equal to 100
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            //console.log("FizzBuzz: " + i);
            outputFor.push(["FizzBuzz: ", i]);
        } else if (i % 3 == 0) {
            //console.log("Fizz: " + i);
            outputFor.push(["Fizz: ", i]);
        } else if (i % 5 == 0) {
            //console.log("Buzz: " + i);
            outputFor.push(["Buzz: ", i]);
        }
    }
    //console.log(output);
}

// Now we only need to run fizzBuzz once
fizzBuzzFor();
console.log(outputFor);


// Fibonacci Sequence Code Challenge
console.log("\n/********* Fibonacci Code Challenge *********/\n");

// Replicate the fibonacci sequence using a function and loops
// It runs the fibonacci sequence but only for the amount of integers
// specified n.
// Output is in the array format.
// This version of the fibonacci sequence must run from 0, not 1.


function fibonacciGenerator(n) {
    // n - 2 ( 0 and 1 are predefined)
    // (n = (n - 1) + (n - 2))
    let sequence = [];

    for (var j = 0; j < n; j++) {
        if (j < 2) {
            sequence.push(j);
        } else {
            sequence.push(sequence[(j - 1)] + sequence[(j - 2)]);
        }
    }

    return sequence;
}

console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(5));
console.log(fibonacciGenerator(20));

/** Another solution I liked
 * let output = [];
 * let fSum = -1;
 * let sSum = 1;
 * let sum = 0;
 * 
 * for (i = 0; i < n; i++) {
 *  sum = fSum + sSum;
 *  output.push(sum);
 *  fSum = sSum;
 *  sSum = sum;
 * }
 * 
 * return output;
 */

