/* ====================================
    Media
    -----

    Exports and minifies images, svg,
    and everything within the media
    folder.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    svgstore     = require('gulp-svgstore'),
    svgmin       = require('gulp-svgmin'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    rename       = require('gulp-rename'),
    config       = require('../config').Media;



/*
    Tasks & Functions
------------------------------------ */

gulp.task('media', function() {
    /*gulp
        .src( config.images.src )
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest( config.images.dest[0] ))
        .pipe(gulp.dest( config.images.dest[1] ));*/

    gulp
        .src( config.svg.src )
        .pipe(svgmin({
            plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
            ]
        }))
        .pipe(gulp.dest( config.dest[0] ))
        .pipe(gulp.dest( config.dest[1] ))
        .pipe(rename({prefix: 'icon-'}))
        .pipe(svgstore())
        .pipe(gulp.dest( "./" ))
});
