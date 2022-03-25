// JAVASCRIPT CONDITIONALS

// Instead of using the love calculator, lets run conditions in some functions
console.log("/************CONDITIONAL EXAMPLES************/\n")
var numToGuess;

function setNumToGuess(number) {
    numToGuess = number;
}

function numberGuesser(number) {

    if (numToGuess == number) {
        console.log("Congratulations!!! you found the number: " + numToGuess);
    } else if ((numToGuess - number) < 5) {
        console.log("You are within 5 of the number");
    } else if ((5 <= (numToGuess - number)) && ((numToGuess - number) < 10)) {
        console.log("You are within 10 of the number");
    } else if ((10 <= (numToGuess - number)) && ((numToGuess - number) < 20)) {
        console.log("You are within 20 of the number, need to go higher");
    } else {
        console.log("You are too far off! (20+)");
    }
}

setNumToGuess(30);
numberGuesser(22);
numberGuesser(10);
numberGuesser(1);
numberGuesser(30);
numberGuesser(27);

// CODING CHALLENGE: BMI
// Code a BMI Calculator using conditionals
console.log("\n/************BMI CHALLENGE************/\n")
function bmiCalculator (weight, height) {
    let interpretation = "";
    var bmi = (weight / (height * height));
    
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    } else if ((bmi <= 24.9) && (bmi >= 18.5)) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else {
        interpretation = "invalid BMI: " + bmi;
    }
    return interpretation;
}

console.log(bmiCalculator(64, 1.8));

// CODING CHALLENGE: LEAP YEAR
// Code a Leap Year calculator that takes a year and tells you if its a leap year or not
console.log("\n/************LEAP YEAR CHALLENGE************/\n")
function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a leap year!");
            } else {
                console.log(year + " is not a leap year.");
            }
        } else {
            console.log(year + " is a leap year!");
        }
    } else {
        console.log(year + " is not a leap year.");
    }

/**************Don't change the code below****************/    

}

isLeap(2000);
isLeap(2024);
isLeap(1950);
isLeap(1872);
isLeap(1937);