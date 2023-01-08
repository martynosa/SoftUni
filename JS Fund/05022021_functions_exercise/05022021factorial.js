function factorial(x, y) {

    function fac(n) {
        let f = 1;
        for (i = 1; i <= n; i++) {
            f *= i;
        }
        return f;
    }
    let result = (fac(x) / fac(y)).toFixed(2);
    console.log(result);
}
factorial(5, 2);
