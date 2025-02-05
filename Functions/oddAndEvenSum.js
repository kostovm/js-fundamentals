function oddAndEvenSum(input) {

    input = String(input).split("").map(Number);

    let oddSum = 0;
    let evenSum = 0;

    for (let number of input) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        };
    };

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}