//radomize link color
var linkAll=document.getElementsByTagName("a");
var randomizeButton=document.getElementById("random-link-colors");
randomizeButton.onclick()
{
    for (var i=0;i<linkAll.length;i++){
        linkAll[i].style.color=rgb((Math.random()*256),(Math.random()*256),(Math.random()*256));
    }
}