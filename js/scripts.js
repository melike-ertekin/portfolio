// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

// Get the nav
var nav = document.getElementById("scroll-nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= 100) {
        nav.classList.add("fixed-top");
    } else {
        nav.classList.remove("fixed-top");
    }
}