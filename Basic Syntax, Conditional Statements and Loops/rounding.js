function rounding(n, p) {

    if (p > 15) {
        p = 15;
    }

    console.log(parseFloat(n.toFixed(p)));
}