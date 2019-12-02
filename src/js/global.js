$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 200) {
            $(".navbar").addClass("compressed");
        } else {
            $(".navbar").removeClass("compressed");
        }
    });
});