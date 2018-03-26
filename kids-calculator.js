function countTo(n) {
    var i = 1;
    for (; i <= n; i++) {
        console.info(i)
    }
}

function addNumbers(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);

    for (; b > 0;) {
        a++;
        b--;
        console.info(a + " - " + "au mai ramas " + (b - 1) + "degetele")
    }
    console.info("Suma este " + a);
}

var count = addNumbers(5, 3);