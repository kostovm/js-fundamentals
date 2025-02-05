function equal(input) {

    let equalCount = 0;

    for (let i = 0; i < input.length; i++) {

        for (let j = 1; j < input[i].length; j++) {
            input[i][j] === input[i][j - 1] ? equalCount++ : null;
        }

        for (let k = 1; k < input.length; k++) {
            input[k][i] === input[k - 1][i] ? equalCount++ : null;
        }
    }

    console.log(equalCount)

}