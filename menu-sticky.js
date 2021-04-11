window.onscroll = function() {stickyNav()}
var navbar = document.getElementById("navbar");
var stickyTop = navbar.offsetTop;
function stickyNav() {
    if(window.pageYOffset >= stickyTop){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
}