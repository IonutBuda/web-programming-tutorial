//radomize link color
var linkAll=document.getElementsByTagName("a");
var randomizeButton=Document.getElementById("random-link-colors");

randomizeButton.onclick = func();
var func = function randomize() {
    for (var i=0;i<linkAll.length;i++){
        linkAll[i].style.color="rgb("+Math.round(Math.random()*256)+','+Math.round(Math.random()*256)+","+Math.round(Math.random()*256)+")";
    }
}