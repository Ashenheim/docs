$(function ($) {

    var target = null;

    $.fn.scrollToID = function (param) {

        $(this).each(function(param) {

            $(this).on('click', function (event) {

                event.preventDefault();

                // Force hide Navigation
                $('html').removeClass('is-fixed navigation-is-active');

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

        });
    };

}(jQuery));
