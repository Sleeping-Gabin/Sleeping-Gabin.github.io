$(function () {
    var path = window.location.pathname;
    var width = window.innerWidth;

    if (path != "" && width <= 640) {
        $(".site-avatar").hide();
        $("#nav").hide();
    }
    else {
        $(".site-avatar").show();
        $("#nav").show();
    }

    $("#nav-button").click(function() {
        $("#nav").slideToggle();

        if ($("#nav-button").text() == "Arrow Drop Up") {
            $("#nav-button").text("Arrow Drop Down");
        }
        else {
            $("#nav-button").text("Arrow Drop Up");
        }
    });

});