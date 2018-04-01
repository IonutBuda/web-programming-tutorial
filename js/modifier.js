var lmnt = document.getElementsByTagName("a");
for (var i = 1; i <= 5; i++) {
    lmnt[i].onclick()
    {
        var brdc = document.getElementById("breadcrumb")
        brdc.innerHTML = (this.innerHTML + " : " + this.title);
    }
}