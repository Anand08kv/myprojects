function blue() {
    document.getElementById("body").setAttribute("class", "body-blue");
    document.getElementById("navbar").setAttribute("class", "navbar navbar-blue");
    document.getElementById("header").setAttribute("class", "header header-blue");
    document.getElementById("boxes").setAttribute("class", "boxes boxes-blue");
}
function red() {
    document.getElementById("body").setAttribute("class", "body-red");
    document.getElementById("navbar").setAttribute("class", "navbar navbar-red");
    document.getElementById("header").setAttribute("class", "header header-red");
    document.getElementById("boxes").setAttribute("class", "boxes boxes-red");
}
function green() {
    document.getElementById("body").setAttribute("class", "body-green");
    document.getElementById("navbar").setAttribute("class", "navbar navbar-green");
    document.getElementById("header").setAttribute("class", "header header-green");
    document.getElementById("boxes").setAttribute("class", "boxes boxes-green");
}
function menuOnClick() {
    document.getElementById("nav-logo").setAttribute("class", "logo click-hide");
    document.getElementById("nav-menu-icon").setAttribute("class", "menu-effect");
    document.getElementById("color-btn").setAttribute("class", "button click-show");
    document.getElementById("mobile").setAttribute("class", "nav click-show");
}