/* ====================================
    Bundled tasks
    -----

    Here are the tasks that compile
    together. Uses runSequence to
    let certain tasks run first before
    another can start.
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    runSequence  = require('run-sequence'),
    config       = require('../config').fonts;


/*
    Tasks & Functions
------------------------------------ */

// gulp build
gulp.task('build', function() {
    runSequence(
        'clear',
        'jekyll-build',
        [ 'scripts', 'styles', 'fonts', "media" ]
    )
});

// gulp server
gulp.task('server', function() {
    runSequence(
        'clear',
        'jekyll-dev',
        [ 'scripts', 'styles', 'fonts', "media" ],
        ['browserSync', 'watch']
    )
});

// gulp serve
gulp.task('serve', ['server']);

// gulp (default)
gulp.task('default', [ 'build' ]);
