function censoredWords(sentence, bannedWord) {

    while (sentence.includes(bannedWord)) {
        sentence = sentence.replace(bannedWord, "*".repeat(bannedWord.length));
    }

    console.log(sentence)

}