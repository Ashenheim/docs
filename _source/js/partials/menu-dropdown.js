$(function ($) {

    menuDropdown = function() {
        var $container = $(".docs-list__container")

        $container.each(function() {
            var $self = $(this),
                $trigger = $(this).children(".docs-list__title");

            $trigger.on('click', function (event) {
                $self.toggleClass('is-active');
            });
        });
    }

}(jQuery));
