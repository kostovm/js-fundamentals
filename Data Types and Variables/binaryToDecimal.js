function binaryToDecimal(num) {
    let sum = 0;
    let length = num.length;

    for (let i = 0; i < length; i++) {
        let bit = Number(num[i]);
        sum += bit * Math.pow(2, length - 1 - i);
    }

    console.log(sum);
}