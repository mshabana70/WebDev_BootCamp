# Tailwind

## What is Tailwind CSS?

- CSS Framework made up of utility classes.
- Much lower-level than Bootstrap, Materialize etc.
- Doesnt provide pre-built components but can easily be made with a few pre-made utility classes.
- Does not have a set look or feel.

## Using Tailwind CSS

- Install Tailwind using NPM (node package manager)
- You'll need node.js installed on your computer

styles.css (src file) -> tailwind -> styles.css (public file) -> index.html

- src folder holds our src css file with our tailwind rules
- public folder holds our public css file with our vanilla css that was compiled by a tailwind script
- Below is how we will import rules of css into our src file:

```
/* Grab all functionality from tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- Below is how we will run our script to compile our src file to our public vanilla css file:

```
"scripts": {
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
  },
```

- To run this script simply enter this in your directory: <code>npm run build-css</code>
