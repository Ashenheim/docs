$("html")
    .removeClass('no-js')
    .addClass('js');

var $baseurl = $("#baseurl").val();

$(document).ready(function() {

    /* ------------------------------
        Initiations
    ------------------------------ */

    $('.docs-navigation a[href^="#"]').scrollToID();
    $('.scrollTop').scrollToID();
    menuToggle();


    /* ------------------------------
        Events
    ------------------------------ */

    // $('.navigation').jScrollPane();


});
