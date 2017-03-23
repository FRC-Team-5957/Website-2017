"use strict";
//gallery(Directory, width of page, total number of pictures in directory index from 0, extension as .jpg or .png)
function gallery(dir, width, max, ext, cap, pi) {
		document.write('<gallery>');
    //Declare path and file variables. Path stores the file path, and File stores the path and the file name and extension.
	var path;
	var file;
	var capt;
	var state = 0;
	//If page is tablet width or lower, use the minimized directory.
    if (width <= 768) {
        path = "gallery/" + dir + "/min/";
    }
	//Else, use the root page directory.
	else {
        path = "gallery/" + dir + "/";
    }
	//Declare and set index to 0.
    var i = 0;
	//for loop from 0 to total number of files in the folder, adding 1 to index each time it's run. onmouseover="on('+i+','+pi+')" onmouseout="off('+i+','+pi+')"
    for (i = 0; i <= max; i++) {
		//Combine path info into file variable.
		file=path + i + ext;
		capt=cap[i]; // pi'+pi+' i'+i+'
		document.write('<section class="off img pi'+pi+' i'+i+'" onmouseover="on('+i+','+pi+')" onmouseout="off('+i+','+pi+')" onclick="check('+i+','+pi+','+state+')">');
        document.write('<img src="'+file+'" alt="'+capt+'" >');
        document.write('<p class="off cap pi'+pi+' i'+i+'">'+capt+'</p>');
		document.write('</section>');
    }
    document.write("</gallery>");
}

//Please know enough to not have to have this function explained.
function off(i, pi){
	var pic = document.getElementsByClassName('on img pi'+pi+' i'+i)[0];
	var caption = document.getElementsByClassName('on cap pi'+pi+' i'+i)[0];
	console.log(i+' off '+pi);
	pic.className=('off img pi'+pi+' i'+i);
	caption.className=('off cap pi'+pi+' i'+i);
}
//I'm trying to implement a hover function and then a click expands image
function on(i, pi){
	//Both vars return an array, even if it's only one entry, so it grabs the first index of that array and stores it. That also happens to be the only one.
	var pic = document.getElementsByClassName('off img pi'+pi+' i'+i)[0];
	var caption = document.getElementsByClassName('off cap pi'+pi+' i'+i)[0];
	//For debugging
	console.log(i+' on '+pi);
	//Set classes on elements.
	pic.className=('on img pi'+pi+' i'+i);
	caption.className=('on cap pi'+pi+' i'+i);
}
function check(i, pi, state){
	if(state){off(i, pi)}
	if(!state){on(i, pi)}
	
}

/*
What it looks like:


What to put into HTML

<script>
var pi = 0 // Increment as used per side. If you have 3 on ftc and 3 on frc, it won't matter. Page index is specific to the side you're working on.
var captions = [
"",
]
var width = document.body.clientWidth;
var max = 0
var ext = ".jpg" //The image format that is in the specified folder.
gallery("ftc/comp1",width,max,ext,captions,pi)
// ftc or frc then the page's folder, width of page to add min or not to the file path, the number of files in folder, array with captions, given, index of use of function.
</script>

*/