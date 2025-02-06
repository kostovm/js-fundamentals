function oddOccurrences(input) {

    occurencesCount = {};
    let result = "";

    let listOfWords = input.toLowerCase().split(" ");

    for (let el of listOfWords) {
        if (occurencesCount.hasOwnProperty(el)) {
            occurencesCount[el]++;
        } else {
            occurencesCount[el] = 1;
        }
    }

    let words = Object.keys(occurencesCount);
    for (let word of words) {
        if (occurencesCount[word] % 2 !== 0) {
            result += word + " "
        }

    }

    console.log(result.trim())

}