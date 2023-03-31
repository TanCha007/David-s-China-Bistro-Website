$(function () { //same as document.addEventLintenser("DOMContentLoaded...")


    $function("navbarToggle").blur(function (event) { // same as document.querySelector("navbarToggle").addEventListener("blur")
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("collapsable-nav").collapse('hide');
        }
    });
});
//This causes to collapse the menu from the min width 768px if we click anywhere else in the page.

(function (global) {
    var dc = {}; //Namespace

    var homeHtml = "Snippets/home-snippets.html";

    // Convinience function for insreing innerHTML for "select"
    var innerHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };

    // Show loading icon inside element identified by "selector"
    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='Snippets/Spinner-1s-200px.gif'></div>"
        insertHtml(selector, html);
    };

    // On page load (befor images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

        //On the first load, show home view
        showLoading("main-content");
        $ajaxUtils.sendGetRequest (
            homeHtml, 
            function (responseText) {
                document.querySelector("main-content").innerHTML= responseText;
            }, false);
    });

    global.$dc=dc;
    
})(window);



