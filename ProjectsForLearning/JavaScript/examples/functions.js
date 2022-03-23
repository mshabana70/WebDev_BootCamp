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
    const priceOfMilk = 3.50;
    const cost = numOfMilk * priceOfMilk;

    return cost;
}

// calling function with parameters
console.log("Cost of milk is: " + getMilkCost(4));

function numOfCandy(amountOfMoney) {
    const costOfCandy = 1.50;
    const result = (amountOfMoney - (amountOfMoney % costOfCandy)) / costOfCandy;

    return result;
}

var money = 30;
console.log("You can buy " + numOfCandy(money) + " pieces of candy with $" + money + " dollars!");