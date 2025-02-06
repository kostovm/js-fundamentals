function replaceRepeatingChars(input) {

    let resultString = input.substring(0, 1);

    for (let char of input) {
        if (!resultString.endsWith(char)) {
            resultString += char;
        }
    }

    console.log(resultString);


}