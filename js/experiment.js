//radomize link color
var linkAll=Document.getElementsByTagName("a");
var randomizeButton=Document.getElementById("random-link-colors");
randomizeButton.onclick()
{
    for (var i=0;i<linkAll.length;i++){
        linkAll[i].style.color=rgb((Math.round(Math.random()*256)),(Math.round(Math.random()*256)),(Math.round(Math.random()*256)))
    }
}