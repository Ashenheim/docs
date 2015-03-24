$(function ($) {

    var target = null;

    scrollToID = function (param) {


        $('a[href^="#"]').on('click', function (event) {

            event.preventDefault();

            target = $( $(this).attr('href') );

            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);

        });

    };

}(jQuery));