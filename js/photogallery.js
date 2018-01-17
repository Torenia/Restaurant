
//Pagination

var pageIndex = 1;

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
    paginationButtons[pageIndex - 1].className += " active";
}

showPage(pageIndex);