function hardWord(input) {

    let letter = input[0];
    let words = input[1].sort((a, b) => b.length - a.length);

    for (let word of words) {
        let search = "_".repeat(word.length);
        letter = letter.replace(search, word);
    }

    console.log(letter)

}