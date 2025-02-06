function stringSubstring(word, text) {

    let wordsAsArray = text.split(" ");
    let notFound = true;

    for (let singleWord of wordsAsArray) {
        if (word.toUpperCase() === singleWord.toUpperCase()) {
            console.log(word);
            notFound = false;
            break;
        }
    }

    if (notFound) {
        console.log(`${word} not found!`)
    }

}