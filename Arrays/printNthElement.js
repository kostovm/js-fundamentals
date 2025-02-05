function nthElement(arr) {

    let n = Number(arr[arr.length - 1]);
    let output = [];

    for (let i = 0; i < arr.length - 1; i += n) {
        output.push(arr[i]);
    }

    console.log(output.join(' '));

}