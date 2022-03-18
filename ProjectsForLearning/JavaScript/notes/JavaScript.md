# JavaScript

<hr>

## JavaScript Origins

### History:

The beginning of Javascript came about around the time that the popular 90's internet browser declined in popularity. Netscape envisioned a world where instead of webpages staying as static HTML pages where all calculations, animations and business logic was handled on servers and then returned to the browser for rendering. Netscape saw the need for dynamic webpages where users can interact with the webpage and recieve feedback in real-time. So Netscape contracted [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) to create a programming language that would add functionality to webpages, all while being simple enough for non-programmers to handle the language. Internet lore says that it took Brendan 10 days to create the Javascript language.

In fact, when javascript was first created, it was called "LiveScript". Then Microsoft felt the need to reverse engineer the language and come up with their own version called "JScript." This led to multiple versions of the Javascript language running on the web. So Europeans tried to standardize the language and created a standard called "ECMAScript," which is what is widely used today. There have been several versions of ECMAScript released, which is what we know as ES5, ES6, ES7 and so on.

### Common Questions:

What does the "Script" in Javascript mean?

- Just like how scripts tell actors what to say and do during a play or film, scripting languages do much of the same thing for web sites. Javascript acts like a script and tells our html elements (our actors in this case) what to do and when to do it.

Java vs Javascript? What is their relationship?

- <blockquote>"Java and Javascript have about as much in common as Car and Carpet."</blockquote> The only reason javascript was called "javascript" was because the word "Java" was a big buzz word in the 90s. They actually have some large differences which you can see below:

<ul>
    <li>
        <h4>Javascript</h4>
        <ul>
            <li>
                Interpreted Language
            </li>
            <li>
                Originally a Frontend Language
            </li>
            <li>
                Supported by all major browsers (chrome, firefox, IE, safari, opera, etc)
            </li>
            <li>
                <img src="./img/js-popularity-chart.png">
            </li>
        </ul>
    </li>
    <li>
        <h4>Java</h4>
        <ul>
            <li>
                Compiled Language
            </li>
            <li>
                Mainly for backend development (now with frontend libraries)
            </li>
        </ul>
    </li>
</ul>

## JavaScript tools in Chrome

### Console:

If you go to your chrome browser, in the top navigation bar under View -> Developer -> Javascript Console, this takes you to the built-in chrome console window where you can test out single lines of javascript at a time. This is great for testing but may not be ideal for testing full programs that require multiple lines of code.

<img src="./img/js-chrome-console.png">
<br>

### Source:

Opposed to the console, the source tab allows for us to create snippets of code within the chrome browser directly. This is a better option than the console if we wish to test out multiple lines of code on the web browser.

<blockquote>Note: Javascript is an interpreter language, so your file will run code line by line until it strikes a line that throws an error or exception.</blockquote>

<img src="./img/js-chrome-snippet.png">
<br>

## JavaScript Structure

### Commands:

<img src="./img/js-message-struc.png">

- <strong>Function:</strong> keyword that can be predefined or custom that allows for some form of behavior
- <strong>Message:</strong> In this case, the message is what is displayed in the pop up window. But in another scenario, the message can be a parameter or input for another behavior.
- <strong>End:</strong> The end of the javascript line of code.

### How to write your JavaScript:

There are many different ways to write your code in JS. But if you wish to adhere to syntax that is widely accepted and adopted by many JavaScript professionials, than you should visit [this repo](https://github.com/rwaldron/idiomatic.js). This is a helpful reference for those starting out, as well as those that are more advanced and need a refresher on best JS syntax practices.
<br>

## JavaScript Data Types

### String:

Strings are a data type defined by the double quotes (""). Any text that is within those double quotes will be stored as a <strong>string</strong> data type by your text editor and web browser. It is called a string because it is a "string" of characters.

### Numbers:

Numbers are integers that are stored as a number data type.

### Boolean:

Boolean is a binary data type that represents two values, true or false, 0 or 1, yes or no.

### Typeof:

Using the <code>typeof()</code> command returns the data type of whatever parameter is entered. This useful in debugging and testing your code.

## JavaScript Variables

In programming, we often repeat information several times throughout our program. Rather than repeat pieces of data everytime we wish to use the data, programmers use this thing called <strong>Variables</strong>.
