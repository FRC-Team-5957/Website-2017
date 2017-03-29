function nav(){document.write('<nav><ul><li onClick="window.open(\'index.html\',\'_self\');"><a>Home</a></li><li onClick="window.open(\'gallery.html\',\'_self\');"><a>Gallery</a></li><li onClick="window.open(\'scouting.html\',\'_self\');"><a>Scouting Information</a></li><li onClick="window.open(\'members.html\',\'_self\');"><a>Members</a></li><!--<li onClick="window.open(\'forum.html\',\'_self\');"><a>Forum</a></li>--><li onClick="window.open(\'news.html\',\'_self\');"><a>News</a></li><li onClick="window.open(\'https://goo.gl/forms/JZXSzxnIJWvKSqR23\',\'_blank\');"><a>Join</a></li></ul></nav>');}
function foot(){document.write('&copy; 2015-2017 Aaron Greco');}

window.onload = function(){
var comp1 = document.getElementsByClassName("comp1");
var comp1T = document.getElementsByClassName("comp1T");

var comp2 = document.getElementsByClassName("comp2");
var comp2T = document.getElementsByClassName("comp2T");

var regional = document.getElementsByClassName("regional");
var regionalT = document.getElementsByClassName("regionalT");

var world = document.getElementsByClassName("world");
var worldT = document.getElementsByClassName("worldT");

var tbal = document.getElementsByClassName("tbal");



for (i=0; i<comp1.length; i++){
comp1[i].innerHTML = "CHS District - Hampton Roads Event 2017";
}
for (i=0; i<comp1T.length; i++){
comp1T[i].dataset.title = 'CHS District - Hampton Roads Event 2017';
}

for (i=0; i<comp2.length; i++){
comp2[i].innerHTML = "CHS District - Central Virginia Event 2017";
}
for (i=0; i<comp2T.length; i++){
comp2T[i].dataset.title = 'CHS District - Central Virginia Event 2017';
}

for (i=0; i<regional.length; i++){
regional[i].innerHTML = "FIRST Chesapeake District Championship 2017";
}
for (i=0; i<regionalT.length; i++){
regionalT[i].dataset.title = 'FIRST Chesapeake District Championship 2017';
}

for (i=0; i<world.length; i++){
world[i].innerHTML = "FIRST Championship";
}
for (i=0; i<worldT.length; i++){
worldT[i].dataset.title = 'FIRST Championship';
}

for (i=0; i<tbal.length; i++){
tbal[i].dataset.title = 'Link to event on The Blue Alliance.';
}
}