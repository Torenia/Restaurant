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


//Pagination

var pageIndex = 1;

if (document.getElementById("photogallery")) {
    showPage(pageIndex);
}


function plusPage(n) {
    showPage(pageIndex += n);
}

function currentPage(n) {
    showPage(pageIndex = n);
}

function showPage(n) {
    var i;
    var pages = document.getElementsByClassName("page");
    var paginationButtons = document.getElementsByClassName("pagination-button");
    if (n > pages.length) {
        pageIndex = 1
    }
    if (n < 1) {
        pageIndex = pages.length
    }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    for (i = 0; i < paginationButtons.length; i++) {
        paginationButtons[i].className = paginationButtons[i].className.replace(" active", "");
    }
    pages[pageIndex - 1].style.display = "block";
    paginationButtons[pageIndex-1].className += " active";
}

