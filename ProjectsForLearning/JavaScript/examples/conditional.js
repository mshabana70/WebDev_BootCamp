// JAVASCRIPT CONDITIONALS

// Instead of using the love calculator, lets run conditions in some functions
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