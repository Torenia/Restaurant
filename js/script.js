//Slider
var sliderPosition = 1;
var sliderTotal = 10;

function AutoSlider() {
    setTimeout(function () {
        var width = document.getElementsByClassName("image");
        sliderPosition++;
        if (sliderPosition > sliderTotal) sliderPosition = 1;
        $("#sliderImj").animate({left: -((sliderPosition - 1) * $(width[0]).width()) + 'px'});
        AutoSlider();
    }, 5000);
}

AutoSlider();


//Add classes to the menu

$(document).ready(function () {
    $("#first-sub-menu").click(function () {
        $("#second-menu").removeClass("visible-menu");
        $("#first-menu").toggleClass("visible-menu");
    });

    $("#second-sub-menu").click(function () {
        $("#first-menu").removeClass("visible-menu");
        $("#second-menu").toggleClass("visible-menu");
    });
})
$.ready();


