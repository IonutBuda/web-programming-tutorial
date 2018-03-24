function afisare(numar1, numar2) {
    for (i = 1; i <= numar1; i++) {
        sum = numar2 + i;
        console.log(numar2 + "+" + i + "=" + sum);
    }
    ;
}

function adunare(n1, n2) {
    if (n1 + n2 > 99) {
        console.log("Numar prea mare!")
    } else {
        if (n1 > n2) {
            afisare(n2, n1);

            ;
        } else {
            afisare(n1, n2);
        }
        ;
    }
    ;
}
;
