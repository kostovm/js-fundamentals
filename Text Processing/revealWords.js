function revealWords(words, text) {

    let hiddenWords = words.split(", ");

    for (let word of hiddenWords) {
        let findWord = "*".repeat(word.length);
        text = text.replace(findWord, word);
    }

    console.log(text);

}