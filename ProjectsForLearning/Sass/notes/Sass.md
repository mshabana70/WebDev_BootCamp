# Sass/Scss

CSS with superpowers! A language that extends CSS with extra features or "Superpowers." These extra features help make styling easier and faster as well. Sass also implements programming principles like variables, inheritance, loops, and functions into css to make it a more flexible language. Through out this document, I will summarize and implement key concepts in Sass to help explain why this language has become a Dev Community favorite over the last few years.
<br><br>

## [Compiling Sass](https://www.youtube.com/watch?v=Sk5jMurFHCo&list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb&index=2)

The key difference between a <code>.sass</code> and a <code>.scss</code> file is the syntax used in both files. In Scss, the syntax is nearly identical to that of vanilla CSS. Even traditional CSS syntax is acceptable and can be compiled in .scss files. It is important to understand that Internet Browsers are not capable of understanding Sass-specific features and syntax, they are capable of reading vanilla CSS syntax. In order to convert our .scss to .css it must be compiled. When using the VS Code IDE, you can install the "Live Sass Compiler" extension to compile your .scss files to .css files for browsers to implement the styles. You can also use the "gulp.js" package to compile and also debug through sass files (note: you will need Node.JS to use NPM for package installation).

<blockquote>Reference Net Ninja Gulp installation video for guidence on installing Gulp package</blockquote>
<br><br>

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
<br><br>

## [Partials & @Imports](https://www.w3schools.com/sass/sass_import.php)

When our Sass files become lengthy with styling rules, it can become messy and hard to manage. One way to help break up our code into multiple files is by using Sass Partials. For example, the variables that we worked on in the previous section can be placed in their own file, as well as the reset styling rules that must be implemented for every style sheet, etc. It is important to remember that the @import rule is not best practice for implementing partials to our main Sass file. You should use <code>@use</code> or <code>@forward</code> rules when importing your partial files:

```
// Variables Partial
// _variables.scss
$primary: #326dee;
$secondary: #1ac888;
$error: #d32752;
$info: #f6c31c;

// style.scss
// @import "variables";
@use "variables" as v;

h1 {
  color: v.$primary;
}
```

<blockquote>Note: Be cautious of which file you are sourcing in your gulpfile.js. If you have a global parameter such as '*.scss', than you will be compiling and watching your partials as well. It is important that you include the underscore in front of your partials for the Sass compiler to ignore said files, e.g '_variables.scss'</blockquote>

Also when importing partials, you must import stylesheets that before other stylesheets that may implements the previous stylesheet's rules. For example, say in our base.scss we use variables that are in the variables.scss partial. In order to make sure those variables are invoked within the variables.scss file, this would be the order of our partials imports:

```
@use 'variables' as v;
@use 'base' as b;
```

<br><br>

## [Nesting](https://sass-lang.com/documentation/style-rules#nesting)

Normally, in vanilla CSS, when trying to style element the selectors we choose are the direct name of that element or its class. Rules we apply to these elements are often repeated across other elements with that parent element. But Sass wants to make our life a little easier. Rather than repeating the same selector, you can write one style rules inside another. When compiled, sass will automatically combine the outer rule's selector with the inner rule's. Take a look at the example below for clarification:

```
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: inline-block;
    }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

This is the same as writing these rules in vanilla CSS:

```
nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav il {
    display: inline-block;
}
...

```

<br><br>

## [Using Maps in Sass:](https://sass-lang.com/documentation/values/maps)

Maps in Sass are very similar to Map data structures in programming. They are associative arrays that are made up of (key, value) pairs. Here is an example of the syntax of maps in Sass:

```
(<expression>: <expression>, <expression>: <expression>)
```

The <a href="https://sass-lang.com/documentation/syntax/structure#expressions">expression</a> before the colon is the key, where as the expression that follows the colon is the value that is associated with the key. Keys must be unique but values can be duplicates. Unlike <a  href="https://sass-lang.com/documentation/values/lists">lists</a>, all maps must be written with <code>()</code> around the key-value pairs. For my custom CSS library, it makes sense to create a color palette using maps. Lets take a look at how that would work:

```
// Variables for Theme Colors
$primary: #326dee;
$secondary: #1ac888;
$error: #d32752;
$info: #f6c31c;

// Color Palette using Maps
$colors: (
  "primary": $primary,
  "secondary": $secondary,
  "error": $error,
  "info": $info,
  "blue": #1919e6,
  "red": #e61919,
  "yellow": #e6e619,
  "green": #19e635,
  "orange": #ffa600,
  "purple": #9900ff,
  "gray": #808080,
  "black": black,
  "white": white,
);
```

<blockquote>Note: You can utilize variables within other data structures, as seen above.</blockquote>
<br>
It is important to remember that Sass maps are <a href="https://sass-lang.com/documentation/values/maps#immutability"><em>immutable</em></a>, meaning all the contents of the original map never change. All of Sass's <a href="https://www.w3schools.com/sass/sass_functions_map.php">map functions</a> return new maps rather than modify the original map you created. There is way to work around this by updating the state of your maps. By using mixins, you can assign new maps to the same map variable as seen below:

```
@use "sass:map";

$prefixes-by-browser: ("firefox": moz, "safari": webkit, "ie": ms);

@mixin add-browser-prefix($browser, $prefix) {
  $prefixes-by-browser: map.merge($prefixes-by-browser, ($browser: $prefix)) !global;
}

@include add-browser-prefix("opera", o);
@debug $prefixes-by-browser;
// ("firefox": moz, "safari": webkit, "ie": ms, "opera": o)
```

<br><br>

## [Loops](https://sass-lang.com/documentation/at-rules/control)

In Sass, there is the <code>@each</code> rule. This is basically the loop tool for Sass, which makes it alot easier to iterate through arrays, lists, or maps. It is also great for repetitive styles that only have a few variations between them. The syntax for @each is as follows:

```
@each <variable> in <expression> {
    ...
}
```

<blockquote>Note: <code>expression</code> returns a list.</blockquote>

Since we just spoke about the use of maps in Sass, lets check out how we would iterate through Maps with the <code>@each</code> rule:

```
$colors: (
    "primary": $primary,
    "secondary": $secondary,
    "blue": #1919e6
);

@each $color in $colors {
    .btn-#{$color} {
        display: inline-block
        background-color: $color;
    }
}

```

You can also iterate through multiple variables within a map, for example:

```
$padding: (
    "small": 5px,
    "large": 10px,
    "x-large": 20px,
    "2x-large": 40px,
);

@each $name, $size in $padding {
    .btn-#{$name} {
        background: #fff;
        border: 1px solid #000;
        padding: $size;
    }
}
```

When working with lists, especially a list of list, you can assign variables dynamically when iterating through the list variable using <code>@each</code>:

```
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

@each $name, $glyph, $size in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
    font-size: $size;
  }
}
```

<blockquote>Note: It is important to remember that the variables instantiated in the @each rule only exist within that rule, never outside of the @each rule block.</blockquote>
<br><br>

## [Conditionals](https://sass-lang.com/documentation/at-rules/control/if)

Very similar to how conditionals are written in most programming languages, using conditionals in Sass are just about the same. The syntax of an If/Else statement is as follows:

```
@if <expression> {...}
@else if <expression> {...}
@else {...}
```

In this example, <code>expression</code> represents a condition that either returns true or false. If true, the follow block of styling will be executed. If false, the block of code will not be executed and the program moves on to the following rules.
<br><br>

## [Parent Selectors](https://sass-lang.com/documentation/style-rules/parent-selector)

The parent selector is a Sass invention where you can target the parent element of nested pseudo elements. The best way to explain this is through examples:

```
// Rather than:
a {
    color: red;
}

a:hover {
    color: blue;
}

// With parent selector
a{
    color: red;

    &:hover {
        color: blue;
    }
}
```

<br><br>

## [Mixins](https://sass-lang.com/documentation/at-rules/mixin)

Since it is common in CSS to reuse properties for many different elements and classes, Sass allows us to group these reusable blocks of styling in to something called a <code>@mixin</code>. Mixins can contain any statement, other than top-level statements, and can be dropped into single style rules. They can also be used to contain their own styles outside of other style rules, as well as modify variables. To place them into a style rule, you must use the <code>@include</code> at-rule to place them:

```
@mixin btn {
    text-decoration: none;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: black;
    color: white;
}

.btn-default {
    @include btn; // implements styles from mixin
}
```

Say you wish to make your mixin more dynamic, where it can respond to different situations. By implementing an argument, you can have the styling within a mixin change based on your needs. Lets reuse the example above:

```
@mixin btn($bg-color, $text-color) {
    text-decoration: none;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: $bg-color;
    color: $text-color;
}

.btn-blue {
    @include btn(blue, black);
}
```

Now if you have a mixin with arguments but you dont need them for all situations, you can apply default values to the arguments that the mixin can "default" to when no value is passed:

```
@mixin btn($bg-color, $text-color: white) {
    text-decoration: none;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: $bg-color;
    color: $text-color;
}

.btn-blue {
    @include btn(blue, 0);
}
```

<blockquote>Note: Visit the link from the Mixin header for more ways to use or implement mixins.</blockquote>
<br><br>

## [Functions](https://sass-lang.com/documentation/at-rules/function)

Functions work very similar to mixins but also can work very differently. Functions can take in arguments and return values when implemented. They help organize complex calculations and make it much easier to read your code. It is common practice to leave <code>@mixins</code> for side-effects and <code>@function</code> for computing values.
