const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Functions 

// function to compile our scss => css and place in css folder
function buildStyles() {
    return src('style.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// Watcher function to compile on every update and save of scss file
function watchTask() {
    watch(['style.scss'], buildStyles)
}

// run functions on export
exports.default = series(buildStyles, watchTask)