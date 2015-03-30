$(function ($) {

    menuToggle = function() {
        var trigger = $('.navigation-trigger'),
            element = $('.site-title'),
            navLink = $('.docs__list a');

        trigger.on('click', function(e) {
            e.preventDefault();

            $('html').toggleClass('navigation-is-active');
        });

        navLink.on('click', function() {
            $('html').removeClass('navigation-is-active');
        });
    }

}(jQuery));