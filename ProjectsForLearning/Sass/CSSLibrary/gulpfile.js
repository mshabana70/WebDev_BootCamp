const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// Functions 

// function to compile our scss => css and place in css folder
function buildStyles() {
    return src('./pixie/**/*.scss')
        .pipe(sass())
        // purge all css selectors that is not used in our html files
        .pipe(purgecss({content: ['*.html']})) // comment out for all selectors compiled
        .pipe(dest('css'))
}

// Watcher function to compile on every update and save of scss file
function watchTask() {
    watch(['./pixie/**/*.scss', '*.html'], buildStyles)
}

// run functions on export
exports.default = series(buildStyles, watchTask)