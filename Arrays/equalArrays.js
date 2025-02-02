function equalArrays(arr1, arr2) {

    let areEqual = true;
    let firstDifference;
    let sum = 0;

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] !== arr2[i]) {
            areEqual = false;
            if (firstDifference === undefined) {
                firstDifference = [i];
            }
        } else {
            sum += Number(arr1[i]);
        }
    }

    let text = {
        1: `Arrays are identical. Sum: ${sum}`,
        2: `Arrays are not identical. Found difference at ${firstDifference} index`
    }

    let output = areEqual ? text[1] : text[2];
    console.log(output);

}