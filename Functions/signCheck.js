function positiveOrNegative() {

    let isPositive = true;

    let numbers = Array.from(arguments);

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            isPositive = !isPositive;
        }
    }

    console.log(isPositive ? 'Positive' : 'Negative');

}