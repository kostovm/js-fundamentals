function negativePositive(arr) {

    arr = arr.map(Number);
    let output = [];

    for (number of arr) {
        number < 0 ? output.unshift(number) : output.push(number);
    }

    console.log(output.join('\n'));

}