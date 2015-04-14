$(function ($) {

    menuToggle = function() {
        var trigger = $('.docs-navigation-trigger'),
            element = $('.site-title'),
            navLink = $('.docs__list a');

        trigger.on('click', function(e) {
            e.preventDefault();

            $('html')
                .toggleClass('is-fixed')
                .toggleClass('navigation-is-active');
        });

        navLink.on('click', function() {
            $('html')
                .removeClass('is-fixed')
                .removeClass('navigation-is-active');
        });
    }

}(jQuery));