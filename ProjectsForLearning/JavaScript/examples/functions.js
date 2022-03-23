// JAVASCRIPT FUNCTIONS

// creating a function
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
    var priceOfMilk = 3.50;
    var cost = numOfMilk * priceOfMilk;

    return cost;
}

// calling function with parameters
console.log("Cost of milk is: " + getMilkCost(4));