function factorialDivision(a, b) {

    function findFactorial(n) {

        let result = n;

        for (let i = n - 1; i > 0; i--) {
            result *= i;
        };
        return result;
    }

    console.log((findFactorial(a) / findFactorial(b)).toFixed(2))

}