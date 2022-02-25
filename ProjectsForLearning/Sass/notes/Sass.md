# Sass/Scss

CSS with superpowers! A language that extends CSS with extra features or "Superpowers." These extra features help make styling easier and faster as well. Sass also implements programming principles like variables, inheritance, loops, and functions into css to make it a more flexible language. Through out this document, I will summarize and implement key concepts in Sass to help explain why this language has become a Dev Community favorite over the last few years.

## [Compiling Sass](https://www.youtube.com/watch?v=Sk5jMurFHCo&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=2)

The key difference between a <code>.sass</code> and a <code>.scss</code> file is the syntax used in both files. In Scss, the syntax is nearly identical to that of vanilla CSS. Even traditional CSS syntax is acceptable and can be compiled in .scss files. It is important to understand that Internet Browsers are not capable of understanding Sass-specific features and syntax, they are capable of reading vanilla CSS syntax. In order to convert our .scss to .css it must be compiled. When using the VS Code IDE, you can install the "Live Sass Compiler" extension to compile your .scss files to .css files for browsers to implement the styles. You can also use the "gulp.js" package to compile and also debug through sass files (note: you will need Node.JS to use NPM for package installation).

<blockquote>Reference Net Ninja Gulp installation video for guidence on installing Gulp package</blockquote>

## [Variables](https://sass-lang.com/documentation/variables)

Very similar to how variables are used in vanilla CSS. The most common use cases for Sass Variables is when you have a value (such as color, font, font size) that is being reused for several rules in you Sass file. Setting those values to variables help maintain consistency and uniformity throughout your stylesheet. Below is an example of some CSS rules for our <code>lesson-2/index.html</code>:

```
button {
    background-color: #3299ef;
}

a {
    color: #3299ef;
}

h1 {
    border-color: #3299ef;
}
```

In this example, we are reusing the value of <code>#3299ef</code> for our elements color properties. This is a good place to use a variable, since we know that we want these three html elements to match in color.

```
// Variables for theme colors
$primaryColor: #3299ef;

button {
    background-color: $primaryColor;
}

a {
    color: $primaryColor;
}

h1 {
    border-color: $primaryColor;
}
```

If I wanted to change the color theme of all elements using our old primary color, I would simply update my <code>$primaryColor</code> variable to whatever color we wish to change it to. It is important to know that variables can be used for more than color, here are some examples:

```
// Theme Colors
$primary: #326dee;
$secondary: #1ac888;
$error: #d32752;
$info: #f6c31c;

// Spacing
$base-padding: 0.75rem;
$base-margin: 0.75rem;

// Borders
$base-border-thickness: 1px;
$base-border-radius: 20px;
```

<blockquote>Note: This is mainly how CSS libraries like Bootstrap implement properties over multple components.</blockquote>
