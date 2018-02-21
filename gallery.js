"use strict";
//gallery(directory, width of page, total of files in directory retireved automatically, extension as .jpg or .png)
function modal() {
  //writes in the modal section.
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

function gallery(dir, ext, cap) {
//imax - Internal Maximum
    document.write('<gallery>');
    //Declare path and file variables. Path stores the file path, and File stores the path and the file name and extension.
    var imax = cap.length;
    var path;
    var file;
    var capt;
    var path = "gallery/" + dir + "/min/";
    //Declare and set index to 0.
    var i = 0;
    //for loop from 0 to total number of files in the folder, adding 1 to index each time it's run.
    for (i = 0; i <= imax; i++) {
        //Combine path info into file variable.
        var file = (path + i + ext);
        //Grab caption for this picture
        var capt = cap[i];
        //adds parts of the onclick method together.
        var start = ('openModal(\"' + file + '\",\"' + capt + '\")');
        //makes image and caption sections
        var imgplace = ('<img src="' + file + '" alt="' + capt + '">');
        var capplace = ('<p class="cap">' + capt + '</p>');
        //writes different parts to file in place
        document.write('<section class=\"sect\" onclick=\"openModal(\'' + file + '\',\'' + capt.replace("'", "\\&apos;") + '\',\'' + imax +'\')\">');
        document.write(imgplace);
        document.write(capplace);
        document.write("</section>");
    }
    document.write("</gallery>");
    document.write("<br />");
}

function openModal(path, caption, imax) {
  //change path from thumbnail to full size
    var fpath = path.replace("/min","");
    var elem = document.getElementById("modal");
    elem.style.display = "block";
    document.getElementById("image").src = fpath;
    document.getElementById("image").alt = caption;
    document.getElementById("modal-caption").innerHTML = caption;
    //sets increase button function's maximum
    document.getElementById("modal-inc").setAttribute( "onClick", "javascript: incModal("+imax+");" );
    var body = document.getElementsByClassName("team");
    body.style[1] = "height:100%; overflow:auto; scroll:no;"
}
function incModal(imax) {
    var path = document.getElementById("image").src;
    
    console.log(imax+' imax.');
    console.log(path+' Image Path');
    /* //Starting cation code
    var captionorigin = document.get
    */
    var newpath = path.split("/");
    var length = newpath.length-1;
    
    //image index string
    var imIS = newpath[length].split(".")
    
    console.log(newpath[length]+' Last element of newpath array.');
    console.log(imIS[0]+' Image Index before increment');
    //if current index is max, do nothing, else increase by one 
    if(imIS[0]==(imax-1)){
      var match = imIS[0]
      }
    else{
    var match = Number(imIS[0])+1;
    }
    
    console.log(match+' match');
    //join path to put into file
    imIS[0] = match;
    newpath[length]=imIS.join(".")
    var gpath = newpath.join("/")
    
    console.log(gpath+' Final Path');
    //write path
    var caption = document.getElementById("image").alt;
    console.log(caption);
    //var doc = document.getElementById("modal-caption").innerHTML = caption;
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
    //if current index is min, do nothing, else decrease by one
    if(imIS[0]==(0)){
      var match = imIS[0]
      }
    else{
    var match = Number(imIS[0])-1;
    }
    
    console.log(match+' match');
    //join path to put into file
    imIS[0] = match;
    newpath[length]=imIS.join(".")
    var gpath = newpath.join("/")
    
    console.log(gpath+' Final Path');
    //write path
    var caption = document.getElementById("image").alt;
    //var doc = document.getElementById("modal-caption").innerHTML = caption;
    document.getElementById("image").src = gpath;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style = "overflow:auto;"
}


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
