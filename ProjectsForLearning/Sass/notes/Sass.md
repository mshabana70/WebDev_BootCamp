# Sass/Scss

CSS with superpowers! A language that extends CSS with extra features or "Superpowers." These extra features help make styling easier and faster as well. Sass also implements programming principles like variables, inheritance, loops, and functions into css to make it a more flexible language. Through out this document, I will summarize and implement key concepts in Sass to help explain why this language has become a Dev Community favorite over the last few years.

## [Compiling Sass](https://www.youtube.com/watch?v=Sk5jMurFHCo&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=2)

The key difference between a <code>.sass</code> and a <code>.scss</code> file is the syntax used in both files. In Scss, the syntax is nearly identical to that of vanilla CSS. Even traditional CSS syntax is acceptable and can be compiled in .scss files. It is important to understand that Internet Browsers are not capable of understanding Sass-specific features and syntax, they are capable of reading vanilla CSS syntax. In order to convert our .scss to .css it must be compiled. When using the VS Code IDE, you can install the "Live Sass Compiler" extension to compile your .scss files to .css files for browsers to implement the styles. You can also use the "gulp.js" package to compile and also debug through sass files (note: you will need Node.JS to use NPM for package installation).

<blockquote>Reference Net Ninja Gulp installation video for guidence on installing Gulp package</blockquote>
