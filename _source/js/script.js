$(document).ready(function() {

        var wrapper = $( '.slides')
            time    = 300,
            $i = 0;

        Engine = function(target) {

            var element = $(target).find( '.slide' );

            element.each(function() {

                var self = $(this);
                $i = $i+1;
                setTimeout(function() {
                    self.addClass('animate-in');
                }, (time * $i) );

            });

            $i = 0;
        }

        wrapper.each(function() {
            Engine(this);
        });



        $(".slide-item").click(function() {
            self = $(this);

            self
                .addClass('focus')
                .delay(1000)
                .queue(function() {
                    $(this).removeClass('focus');
                    $(this).dequeue();
                });


            $('.animate-in', self)
                .removeClass('animate-in');

            setTimeout( function() {  Engine(self) }, 1000);
        });


        $('.btn').each(function() {
            var $this  = $(this),
                value  = $this.html();
                copy   = '<span>' + value + '</span>';

            console.log( $this.text() );

            $this
                .addClass('btn-js')
                .empty()
                .append( copy )
                .append( copy );
        });

});