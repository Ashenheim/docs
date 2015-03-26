var gulp = require('gulp');
var prettify = require('gulp-prettify');
var config = require('../config').Prettify;

gulp.task('prettify', function() {
  gulp.src( config.src )
    .pipe(prettify( config.settings ))
    .pipe(gulp.dest( config.dest ))
});