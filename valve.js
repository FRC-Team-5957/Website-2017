function onLoad() {
    if (localStorage.getItem("valve") == "1") {
        toFRC();
    }
    if (localStorage.getItem("valve") == "0") {
        toFTC();
    }
    if (localStorage.getItem("valve") === null) {
        toFRC();
    }
}
function toFTC() {
    var team = document.getElementsByClassName("team");
    team[1].style.display = "none";
    team[0].style.display = "initial";
    team[0].style.textIndent = "initial";
    var e = document.getElementById("left");
    e.className = "off";
    var e = document.getElementById("right");
    e.className = "on";
    localStorage.setItem("valve", "0");
    document.title = "C5CC - FTC " + page;
}
function toFRC() {
    var team = document.getElementsByClassName("team");
    team[0].style.display = "none";
    team[1].style.display = "initial";
    team[1].style.textIndent = "initial";
    var e = document.getElementById("right");
    e.className = "off";
    var e = document.getElementById("left");
    e.className = "on";
    localStorage.setItem("valve", "1");
    document.title = "C5CC - FRC " + page;
}

window.onload = function(){

document.getElementsByClassName("comp1")[0].innerHTML = "CHS District - Hampton Roads Event 2017";
document.getElementsByClassName("comp2")[0].innerHTML = "CHS District - Central Virginia Event 2017";
document.getElementsByClassName("regional")[0].innerHTML = "FIRST Chesapeake District Championship 2017";
document.getElementsByClassName("world")[0].innerHTML = "FIRST Championship";
}