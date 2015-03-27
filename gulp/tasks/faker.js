
/* ====================================
    Sass
==================================== */


/*
    Plugins & Variables
------------------------------------ */

var gulp         = require('gulp'),
    fs           = require('fs'),
    faker        = require('faker');

var ammount = 80;

/*
    Tasks & Functions
------------------------------------ */

var config = [
    {
        file: './_data/output.json',
        ammount: 20
    }
];


gulp.task('faker', function() {

    for (var $i=0; $i < config.length; $i++ ) {
        console.log($i);

        fakeData = function() {
            return {
                name: faker.name.findName(),
                email: faker.internet.email(),
                image: faker.internet.avatar(),
                city: faker.image.city()
            }
        };

        var fakeString = function() {
            return JSON.stringify( fakeData() );
        };

        var wstream = fs.createWriteStream( config[$i].file );

        wstream.write('{\n');
        wstream.write('"members": [\n');
        for ( $l=0; $l < config[$i].ammount; $l++ ) {

            if ( $l < (config[$i].ammount - 1) ) {
                var comma = ",";
            } else {
                var comma = "";
            }

            wstream.write( fakeString() + comma + '\n' );
        };
        wstream.write(']\n');
        wstream.write('}');
        wstream.end( function() { console.log('finished') });
    };

});