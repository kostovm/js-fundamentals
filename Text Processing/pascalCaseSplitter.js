function pascalCaseSplitter(input) {

    let separateWords = [];

    let newWordStartsAt = 0;
    let newWordEndsAt = 0;

    for (let i = 1; i < input.length; i++) {
        if (input.charCodeAt(i) < 97 || input.charCodeAt(i) > 122) {
            newWordEndsAt = i;
            let newWord = input.substring(newWordStartsAt, newWordEndsAt);
            separateWords.push(newWord);
            newWordStartsAt = i;
        }
    }

    let lastWord = input.substring(newWordStartsAt);
    separateWords.push(lastWord);
    console.log(separateWords.join(", "));

}