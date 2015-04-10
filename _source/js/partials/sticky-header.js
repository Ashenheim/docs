(function ($) {

    stickyHeader = function(elements) {

        var element,
            elementTop
            scrollTop = $(window).scrollTop();

        $(elements).each(function() {
            element = $(this),
            elementTop = element.offset().top;

            _scroll = function() {
                scrollTop = $(window).scrollTop();


                if ( scrollTop > elementTop) {
                    element.addClass('is-sticky');
                } else {
                    element.removeClass('is-sticky');
                }
            }

            var intervalID = setInterval( _scroll, 10 );
        });

    }

}(jQuery))