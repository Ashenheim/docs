$(function ($) {

    var target = null;

    scrollToID = function (param) {


        $('.docs-navigation a[href^="#"]').on('click', function (event) {

            event.preventDefault();

            target = $( $(this).attr('href') );

            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50
            }, 500);

            target
                .addClass('focus')
                .on('transitionend webkitTransitionEnd mozTransitionEnd webkitTransitionEnd oTransitionEnd', function() {
                    target.removeClass('focus');
                });

        });

    };

}(jQuery));