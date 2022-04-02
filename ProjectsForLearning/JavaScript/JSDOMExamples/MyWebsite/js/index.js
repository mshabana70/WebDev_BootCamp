// // alert("Hello!");

// // Look for h1 element and change content
// document.getElementById("secondHeader").innerHTML = "Good Bye World!";

// Lesson 141

//See what is inside the document object
console.log(document); 
// returns full HTML file (everything inside the <html> tag)

// See what the first element child of the document is
console.log(document.firstElementChild);
// returns the <html>...</html> since that is the first element child

// See what the first element child of the first element child (<html>) is
console.log(document.firstElementChild.firstElementChild);
// returns the <head>...</head> tag, the first child of <html>

// See if we can target the <body> tag
console.log(document.firstElementChild.lastElementChild);
// This gets the last element child of the <html> tag which is the <body> tag

// See if we can target the <h1> tag
console.log(document.firstElementChild.lastElementChild.firstElementChild);
// This gets the first element child of the <body> tag which is the <h1> tag

// Now lets try to manipulate the <h1> tag's content
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good Day from JS DOM"; // we change the contents using innerHTML

// Style the heading as well
heading.style.color = "blue";
// Changes h1 to blue

// You can also use querySelector to access elements by selector
var checkbox = document.querySelector("input");
checkbox.click();


/* CODE CHALLENGE */

/*
    Select the third item in the unorder list and change the text of 
    the <li> element using JS DOM Manipulation.
*/

var lastListElement = document.querySelector("ul").lastElementChild;
console.log(lastListElement); // test that this is the right list element
lastListElement.innerHTML = "Mahmoud Shabana";

// Get back elements by class name
var listItems = document.getElementsByClassName("list");
console.log(`returns array of our list elements:`);
console.log(listItems);


// Manipulating the second list item
listItems[1].innerHTML = "Changed from JS File";

// Get back elements by ID name
var secondHeader = document.getElementById("secondHeader");
secondHeader.innerHTML = "Changed using ID name";

// You can get more specific with you selectors to get more specific elements
// Use the same syntax as you would in CSS
console.log(document.querySelector("#secondHeader")); // returns second h1
console.log(document.querySelector("li a")); // returns a tag within li elements
console.log(document.querySelector("li.item")); // returns li element with class name "item"

// CODE CHALLENGE

// Change the color of the embedded link in the first li element in the list
var firstLink = document.querySelector(".list a");
// console.log(firstLink); // check if it is the right link
firstLink.style.color = "red";
