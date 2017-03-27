function nav(){document.write('<nav><ul><li onClick="window.open(\'index.html\',\'_self\');"><a>Home</a></li><li onClick="window.open(\'gallery.html\',\'_self\');"><a>Gallery</a></li><li onClick="window.open(\'scouting.html\',\'_self\');"><a>Scouting Information</a></li><li onClick="window.open(\'members.html\',\'_self\');"><a>Members</a></li><!--<li onClick="window.open(\'forum.html\',\'_self\');"><a>Forum</a></li>--><li onClick="window.open(\'news.html\',\'_self\');"><a>News</a></li><li onClick="window.open(\'https://goo.gl/forms/JZXSzxnIJWvKSqR23\',\'_blank\');"><a>Join</a></li></ul></nav>');}
function foot(){document.write('&copy; 2015-2017 Aaron Greco');}
window.onload = function(){

document.getElementsByClassName("comp1")[0].innerHTML = "CHS District - Hampton Roads Event 2017";
document.getElementsByClassName("comp2")[0].innerHTML = "CHS District - Central Virginia Event 2017";
document.getElementsByClassName("regional")[0].innerHTML = "FIRST Chesapeake District Championship 2017";
document.getElementsByClassName("world")[0].innerHTML = "FIRST Championship";
}