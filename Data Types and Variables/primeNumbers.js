function primeNumbers(num) {

    let isPrime = true;

    if (num < 3 && num !== 2) {
        isPrime = false;
    } else if (num % 2 === 0 && num !== 2) {
        isPrime = false;
    } else {
        for (let i = 3; i < Math.sqrt(num); i += 2) {
            if (num % i === 0 && num !== i) {
                isPrime = false;
            }
        }
    }

    console.log(isPrime);

}