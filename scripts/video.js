/*----- Video Buttons -----*/
var myVideo = document.getElementById("lesson04"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 640; 
}     

function makeBig() { 
    myVideo.width = 1000; 
} 

/*----- Audio Buttons -----*/
var aud = document.getElementById("BOM");

function enableMute() { 
    aud.muted = true;
} 

function disableMute() { 
    aud.muted = false;
} 

/*----- Canvas -----*/
function draw() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("This text drawn by JavaScript",100,110);
}
