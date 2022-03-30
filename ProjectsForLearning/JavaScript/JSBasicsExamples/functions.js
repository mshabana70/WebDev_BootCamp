// JAVASCRIPT FUNCTIONS 

// creating a function
console.log("\n/*************FUNCTIONS**********/\n");
function myFunc() {
    var name = "Mahmoud Shabana";
    console.log(name + " says hi from his function!");
}

// calling a function
myFunc();

// Function for robot getting milk
function getMilk() {
    console.log("'BEEP BOOP GOING TO GET MILK BOOP BEEP!'")
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buyMilk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

// call get milk function
getMilk();

// creating a function with parameters
function getMilkCost(numOfMilk) {
    const priceOfMilk = 3.50;
    const cost = numOfMilk * priceOfMilk;

    return cost;
}

// calling function with parameters
console.log("\n/*************FUNCTIONS WITH PARAMETERS**********/\n");
console.log("Cost of milk is: " + getMilkCost(4));

function numOfCandy1(amountOfMoney) {
    const costOfCandy = 1.50;
    const result = (amountOfMoney - (amountOfMoney % costOfCandy)) / costOfCandy;

    return result;
}

var moneys = 30;
console.log("You can buy " + numOfCandy1(moneys) + " pieces of candy with $" + money + " dollars!");

// coding exercises
// calculate your remaining time in days, weeks, months (assuming you live to 90);
console.log("\n/*************CODING CHALLENGE 1**********/\n");
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    let days;
    let weeks;
    let months;
    
    var yearsLeft = 90 - age;
    months = yearsLeft * 12;
    weeks = yearsLeft * 52;
    days = yearsLeft * 365;
    
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left." );
    
/*************Don't change the code below**********/
}

// testing coding challenge
lifeInWeeks(23);
lifeInWeeks(21);
lifeInWeeks(46);
lifeInWeeks(55);

// Nesting Functions
console.log("\n/*************NESTING FUNCTIONS**********/\n");
function tripToCandyStore(money) {
    console.log("Today I got $" + money + " dollars in allowance and want to go to the candy store!");
    console.log("There are two types of candy I can get, chocolate or caramel.");

    var chocolatePrice = 1.50;
    var caramelPrice = 2.50;
    console.log("The price of chocolate is $" + chocolatePrice + " a piece and caramel is $" + caramelPrice + " a piece");

    var chocolateAmount = numOfCandy(money, chocolatePrice);
    var caramelAmount = numOfCandy(money, caramelPrice);

    console.log("With $" + money + " dollars, I can get " + chocolateAmount + " pieces of chocolate or " + caramelAmount + " pieces of caramel.");
}

function numOfCandy(amountOfMoney, costOfCandy) {
    const result = (amountOfMoney - (amountOfMoney % costOfCandy)) / costOfCandy;

    return result;
}

tripToCandyStore(30);

// CODING CHALLENGE 2
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
console.log("\n/*************CODING CHALLENGE 2**********/\n");
function bmiCalculator(weight, height) {
    return Math.round((weight / (height ** 2))); 
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:*/

var bmi = bmiCalculator(65, 1.8); 
console.log("Your bmi is " + bmi + " rounded.");

/*
bmi should equal 20 when it's rounded to the nearest whole number.

*/
