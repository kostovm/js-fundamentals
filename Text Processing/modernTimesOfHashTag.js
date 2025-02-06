function modernTimesOfHashTag(input) {

    let arr = input.split(" ");

    for (let word of arr) {
        if (word.startsWith("#") && word.length > 1) {
            word = word.substring(1);
            if (/^[A-Za-z]*$/.test(word)) {
                console.log(word);
            }
        }
    }

}