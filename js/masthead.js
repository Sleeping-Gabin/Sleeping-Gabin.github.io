$(function () {
    var path = window.location.pathname;
    var width = window.innerWidth;

    if (path != "" && width >= 640) {
        $(".site-avatar").hide();
        $("#nav").hide();
    }
    else {
        $(".site-avatar").show();
        $("#nav").show();
    }

    $("#nav-button").click(function() {
        $("#nav").slideToggle();

        if ($("#nav").text() == "Arrow Drop Up") {
            $("#nav").text("Arrow Drop Down");
        }
        else {
            $("#nav").text("Arrow Drop Up");
        }
    });

});