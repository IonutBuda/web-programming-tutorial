var leftBar = document.getElementById("left-bar");
var widgets = leftBar.getElementsByTagName("div");
var expandCollapseButton = leftBar.getElementsByTagName("button");
expandCollapseButton.onclick = function() {
    if (expandCollapseButton.innerHTML === "Collapse all widgets") {
        for (var i = 0; i < widgets.length; i++) {
            widgets[i].className = "widget collapsed";
        }
        expandCollapseButton.innerHTML = "Expand all widgets";
    } else {
        for (var i = 0; i < widgets.length; i++) {
            widgets[i].className = "widget";
        }
        expandCollapseButton.innerHTML = "Collapse all widgets";
    }
};