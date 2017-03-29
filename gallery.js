"use strict";
//gallery(Directory, width of page, total number of pictures in directory index from 0, extension as .jpg or .png)
function modal() {
    document.write('<section id="modal">');
    document.write('<section id="modal-container">');
    document.write('<img src=""alt="" id="image">');
    document.write('<a id="modal-close" onclick="closeModal()">&times</a>');
    document.write('<p id="modal-caption"></p>');
    document.write('</section>');
    document.write('</section>');
}

function gallery(dir, max, ext, cap) {

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
    for (i = 0; i <= max; i++) {
        //Combine path info into file variable.
        var file = (path + i + ext);
        var capt = cap[i];
        var start = ('openModal(\"' + file + '\",\"' + capt + '\")');
        var imgplace = ('<img src="' + file + '" alt="' + capt + '">');
        var capplace = ('<p class="cap">' + capt + '</p>');
        document.write('<section class=\"sect\" onclick=\"openModal(\'' + file + '\',\'' + capt.replace("'", "\\&apos;") + '\')\">');
        document.write(imgplace);
        document.write(capplace);
        document.write("</section>");
    }
    document.write("</gallery>");
    document.write("<br />");
}

function openModal(path, caption) {
    var fpath = path.replace("/min","")
    var elem = document.getElementById("modal");
    elem.style.display = "block";
    var img = document.getElementById("image");
    document.getElementById("image").src = fpath;
    document.getElementById("image").alt = caption;
    document.getElementById("modal-caption").innerHTML = caption;
    var body = document.getElementsByClassName("team");
    body.style[1] = "height:100%; overflow:auto; scroll:no;"
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
