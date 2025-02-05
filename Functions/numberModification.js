function numberModification(number) {

    let numberAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }

    if (Math.trunc(sum / numberAsString.length) >= 5) {
        return number;
    }

    return numberModification(numberAsString + 9);

}