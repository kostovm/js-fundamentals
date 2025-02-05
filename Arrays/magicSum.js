function magicSum(arr, magicNumber) {

    while (arr.length > 0) {
        let currentNumber = arr.shift()
        for (let secondNumber of arr) {
            if (currentNumber + secondNumber === magicNumber) {
                console.log(`${currentNumber} ${secondNumber}`);
            }
        }
    }
}