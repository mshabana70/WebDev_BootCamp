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