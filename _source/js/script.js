$("html")
    .removeClass('no-js')
    .addClass('js');

var $baseurl = $("#baseurl").val();

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    scrollToID();
    menuToggle();
    stickyHeader('.sidebar');


    /* ------------------------------
        Events
    ------------------------------ */

    // $('.navigation').jScrollPane();


});