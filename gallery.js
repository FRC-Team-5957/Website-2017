"use strict";
//gallery(Directory, width of page, total number of pictures in directory index from 0, extension as .jpg or .png)
function modal() {
    document.write('<section id="modal" >');
    document.write('<section id="modal-container">');
    document.write('<img src=""alt="" id="image">');
    document.write('<a id="modal-inc" onclick="incModal()">></a>');
    document.write('<a id="modal-dec" onclick="decModal()"><</a>');
    document.write('<a id="modal-close" onclick="closeModal()">&times</a>');
    document.write('<p id="modal-caption"></p>');
    document.write('</section>');
    document.write('</section>');
}

function gallery(dir, imax, ext, cap) {
//imax - Internal Maximum
    document.write('<gallery>');
    //Declare path and file variables. Path stores the file path, and File stores the path and the file name and extension.
    var path;
    var file;
    var capt;
    var state = 0;
    path = "gallery/" + dir + "/min/";
    //Declare and set index to 0.
    var i = 0;
    //for loop from 0 to total number of files in the folder, adding 1 to index each time it's run.
    for (i = 0; i <= imax; i++) {
        //Combine path info into file variable.
        var file = (path + i + ext);
        var capt = cap[i];
        var start = ('openModal(\"' + file + '\",\"' + capt + '\")');
        var imgplace = ('<img src="' + file + '" alt="' + capt + '">');
        var capplace = ('<p class="cap">' + capt + '</p>');
        document.write('<section class=\"sect\" onclick=\"openModal(\'' + file + '\',\'' + capt.replace("'", "\\&apos;") + '\',\'' + imax +'\')\">');
        document.write(imgplace);
        document.write(capplace);
        document.write("</section>");
    }
    document.write("</gallery>");
    document.write("<br />");
}

function openModal(path, caption, imax) {
    var fpath = path.replace("/min","");
    var elem = document.getElementById("modal");
    elem.style.display = "block";
    document.getElementById("image").src = fpath;
    document.getElementById("image").alt = caption;
    document.getElementById("modal-caption").innerHTML = caption;
    document.getElementById("modal-inc").setAttribute( "onClick", "javascript: incModal("+imax+");" );
    var body = document.getElementsByClassName("team");
    body.style[1] = "height:100%; overflow:auto; scroll:no;"
}
function incModal(imax) {
    var path = document.getElementById("image").src;
    console.log(imax+' imax.');
    console.log(path+' Image Path');
    
    
    var newpath = path.split("/");
    
    var length = newpath.length-1;
    
    //image index string
    var imIS = newpath[length].split(".")
    
    console.log(newpath[length]+' Last element of newpath array.');
    console.log(imIS[0]+' Image Index before increment');

    if(imIS[0]==(imax-1)){
      var match = imIS[0]
      }
    else{
    var match = Number(imIS[0])+1;
    }
    
    
    console.log(match+' match');
    // "/.$/" Replaces last character of string with specified string.
    //var gpath = epath.replace(/.$/,String(match))+".jpg";
    imIS[0] = match;
    newpath[length]=imIS.join(".")
    var gpath = newpath.join("/")
    console.log(gpath+' Final Path');
    
    var caption = document.getElementById("image").alt;
    console.log(caption);
    var doc = document.getElementById("modal-caption").innerHTML = caption;
    document.getElementById("image").src = gpath;
    
  
  
}

function decModal() {
    var path = document.getElementById("image").src;
    console.log(path+' Image Path');
    
    
    var newpath = path.split("/");
    
    var length = newpath.length-1;
    
    //image index string
    var imIS = newpath[length].split(".")
    
    console.log(newpath[length]+' Last element of newpath array.');
    console.log(imIS[0]+' Image Index before decrement');

    if(imIS[0]==(0)){
      var match = imIS[0]
      }
    else{
    var match = Number(imIS[0])-1;
    }
    
    
    console.log(match+' match');
    // "/.$/" Replaces last character of string with specified string.
    //var gpath = epath.replace(/.$/,String(match))+".jpg";
    imIS[0] = match;
    newpath[length]=imIS.join(".")
    var gpath = newpath.join("/")
    console.log(gpath+' Final Path');
    
    var caption = document.getElementById("image").alt;
    var doc = document.getElementById("modal-caption").innerHTML = caption;
    document.getElementById("image").src = gpath;
    
  
  
}
function closeModal() {
  
    var elem = document.getElementById("modal");
    elem.style.display = "none";
    var body = document.body;
    body.style = "overflow:auto;"
}

//Please know enough to not have to have this function explained.


/*
What it looks like:

What to put into HTML

<script>
var captions = [
"",
]

var max = 0
var ext = ".jpg" //The image format that is in the specified folder.
gallery("ftc/comp1",width,max,ext,captions,pi)
// ftc or frc then the page's folder, width of page to add min or not to the file path, the number of files in folder, array with captions, given, index of use of function.
</script>

*/
