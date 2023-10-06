$(function () {
    var path = window.location.pathname;
    var width = window.innerWidth;

    if (path != "/" && width <= 640) {
        $(".site-avatar").hide();
        $("#nav").hide();
        $("#nav-button").hide();
    }
    else {
        $(".site-avatar").show();
        $("#nav").show();
        $("#nav-button").show();
    }

    $("#nav-button").click(function() {
        $("#nav").slideToggle();

        if ($("#nav-button").text() == "arrow_drop_up") {
            $("#nav-button").text("arrow_drop_down");
        }
        else {
            $("#nav-button").text("arrow_drop_up");
        }
    });

});