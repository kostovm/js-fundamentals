function amazingNumbers(number) {

    number = String(number);
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    let isAmazing = String(sum).includes('9') ? "True" : "False";

    console.log(`${number} Amazing? ${isAmazing}`);

}