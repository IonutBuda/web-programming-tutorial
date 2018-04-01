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

    while (degete) {
        degete--; //scadem deget
        suma++; //crestem suma
        console.info(suma + " - " + "au mai ramas " + degete + "degetele")
    }
    console.info("Suma este " + suma);
}

//var count = addNumbers(5, 3);
//var count = addNumbers(45,32);

function isNumberPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbersTo(n) {
    for (var i = 1; i < n; i++) {
        if (isNumberPrime(i)) {
            console.log(i)
        }
    }

};

showPrimeNumbersTo(37);