// Imports
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Functions

// Compile sass => css and place in css folder
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// Watcher function that runs buildStyles everytime we save
function watchTask() {
    watch(['index.scss'], buildStyles)
}

// Lets run our functions
exports.default = series(buildStyles, watchTask)