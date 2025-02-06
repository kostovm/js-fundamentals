function wordOccurrences(input) {
    let wordCount = {};

    for (let word of input) {
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }

    let entries = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of entries) {
        console.log(`${word} -> ${count} times`)
    }

}