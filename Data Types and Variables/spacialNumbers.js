function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let currentNumber = i;
        let sum = 0;
        while (currentNumber > 0) {
            sum += currentNumber % 10;
            currentNumber = Math.floor(currentNumber / 10);
        }
        let isSpecial = sum === 5 || sum === 7 || sum === 11 ? "True" : "False";
        console.log(`${i} -> ${isSpecial}`);
    }

}