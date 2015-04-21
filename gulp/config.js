/* ====================================
    Configuration file
==================================== */


var paths = {
    bower : "./bower_components/",
    dest  : "_site/",
    assets: "assets/",
    sass  : "_source/sass/",
    js    : "_source/js/",
    media : "_source/media/"
}


/*
    Task settings
------------------------------------ */

module.exports = {

    /* ------------------------------
        Jekyll
    ------------------------------ */
    Jekyll: {
        src: [
            "*.{html,md,json}",
            "_includes/**",
            "_layouts/**",
            "_posts/**",
            "_data/**",
            "_docs/**",
            "_config.yml", "_config.dev.yml"
        ],
        dest: paths.dest
    },

    /* ------------------------------
        HTML Prettify
    ------------------------------ */
    Prettify: {
        src: [
            paths.dest + "*.{html}"
        ],
        dest: paths.dest,
        settings: {
            "indent_size": 4,
            "indent_inner_html": true,
            "unformatted": ['pre', 'code'],
            "preserve_newlines": true,
            "brace-style": "end-expand",
            "wrap-attributes" : "force"
        }
    },

    /* ------------------------------
        Sass
    ------------------------------ */
    Sass: {
        src: [
            paths.sass + "*.{sass,scss}",
            paths.sass + "**/*.{sass,scss}",
        ],
        dest: {
            one: paths.dest + paths.assets + "css/",
            two: paths.assets + "css/"
        },
        settings: {
            style: 'compressed',
            errLogToConsole: true
        },
        autoprefixer: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ]
    },

    /* ------------------------------
        Javascript
    ------------------------------ */
    Scripts: {
        src: [
            paths.bower + "/jquery/dist/jquery.js",
            paths.bower + "/angular/angular.js",
            paths.bower + '/jScrollPane/script/jquery.mousewheel.js',
            paths.bower + '/jScrollPane/script/jquery.jscrollpane.js',

            paths.js + "/vendors/**/*.js",
            paths.js + "/partials/**/*.js",
            paths.js + "/script.js"
        ],
        dest: {
            one: paths.dest + paths.assets + "js/",
            two: paths.assets + "js/"
        },
        uglify: { mangle: false }
    },

    /* ------------------------------
        Media
    ------------------------------ */
    Media: {
        images: {
            src: paths.media + "*.{jpg,gif,png,svg}"
        },
        svg: {
            src: paths.media + "*.svg"
        },
        dest: [
            paths.dest + paths.assets + "media/",
            paths.assets + "media/"
        ]
    },

    /* ------------------------------
        Fonts copy
    ------------------------------ */
    fonts: {
        src: paths.bower + "font-awesome/fonts/*",
        dest: {
            one: paths.dest + paths.assets + "fonts/",
            two: paths.assets + "fonts/"
        }
    },

    /* ------------------------------
        Clean-up
    ------------------------------ */
    clear: [
        paths.dest,
        paths.assets
    ],

    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browserSync: {
        server: {
            baseDir: paths.dest
        },
        host: "localhost",
        open: false,
        port: 4040
    },
}
