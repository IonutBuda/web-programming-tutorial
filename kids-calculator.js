function countTo(n) {
    var i = 1;
    for (; i <= n; i++) {
        console.info(i)
    }
}

function addNumbers(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);

    var suma = a;//maxim
    var degete = b; //minim
    if (a < b) {
        suma = b;
        degete = a;
    }

    for (; degete > 0;) {
        degete--;
        suma++;
        console.info(suma + " - " + "au mai ramas " + degete + "degetele")
    }
    console.info("Suma este " + suma);
}

var count = addNumbers(5, 3);