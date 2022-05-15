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
function showMenuOnClick(pressID) {
    let varspan = document.getElementById("btnvar").innerHTML;
    if(pressID=="click1" && varspan!="click1"){
        document.getElementById("btnvar").innerHTML=pressID;
        document.getElementById("nav-menu-icon").setAttribute("class", "menu-effect");
        document.getElementById("nav-logo").setAttribute("class", "logo click-hide");
        document.getElementById("color-btn").setAttribute("class", "button click-show");
        document.getElementById("mobile").setAttribute("class", "nav click-show");
        return;
    }
    if(varspan=="click1" && (pressID!="click1" || pressID=="click1")){
        document.getElementById("btnvar").innerHTML="";
        document.getElementById("nav-menu-icon").setAttribute("class", "menu-effect-rev");
        document.getElementById("nav-logo").setAttribute("class", "logo click-show");
        document.getElementById("color-btn").setAttribute("class", "button click-hide");
        document.getElementById("mobile").setAttribute("class", "nav click-hide");
    }   
}
switch (Math.floor(Math.random() * 5) + 1) {    //The +1 is to not include 0
    case 1:
        blue();
        break;
    case 2:
        red();
        break;
    case 3:
        green();
        break;
    case 4:
        red();
        break;
    case 5:
        green();
        break;
    default:
        blue();
}