function adunare(n1, n2) {
    if (n1 + n2 > 99) {
        console.log("Numar prea mare!")
    } else {
        if (n1 > n2) {
            for (var i = 1; i <= n2; i++) {
                var sum = n1 + i;
                console.log(n1 + "+" + i + "=" + sum + " ramane " + (n1 - i));
            }
            ;
        } else {
            for (var i = 1; i <= n1; i++) {
                var sum = n2 + i;
                console.log(n2 + "+" + i + "=" + sum + " ramane " + (n1 - i));
            }
            ;
        }
        ;
    }
    ;
};