function adunare(n1, n2) {
    if (n1 + n2 > 99) {
        console.log("Numar prea mare!")
    } else {
        if (n1 > n2) {
            for (i = 1; i <= n2; i++) {
                sum = n1 + i;
                console.log(n1 + "+" + i + "=" + sum);
            }
            ;
        } else {
            for (i = 1; i <= n1; i++) {
                sum = n2 + i;
                console.log(n2 + "+" + i + "=" + sum);
            }
            ;
        }
        ;
    }
    ;
}