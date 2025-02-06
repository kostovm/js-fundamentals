function wordTracker(input) {
    let wordCount = {};
    let findWords = input[0].split(" ");

    for (let word of findWords) {
        wordCount[word] = 0;
        for (let i = 1; i < input.length; i++) {
            if (input[i] === word) {
                wordCount[word] += 1;
            }
        }
    }
    let entries = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of entries) {
        console.log(`${word} - ${count}`)
    }
}