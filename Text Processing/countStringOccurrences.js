function countStringOccurrences(sentence, searchedWord) {

    let separateWords = sentence.split(" ");
    let occurenceCount = 0;

    for (let word of separateWords) {
        if (word === searchedWord) {
            occurenceCount++
        }
    }

    console.log(occurenceCount)

}