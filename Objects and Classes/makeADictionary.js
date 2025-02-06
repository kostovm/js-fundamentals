// Initial solution

function makeADictionary(input) {

    let dictationary = {}

    for (let el of input) {
        let obj = JSON.parse(el);
        let keys = Object.keys(obj);
        let key = keys[0];
        dictationary[key] = obj[key];
    }

    let sortedKeys = Object.keys(dictationary).sort((keyA, keyB) => keyA.localeCompare(keyB));

    for (let key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${dictationary[key]}`);
    }
}

// Solution after revisiting the task

function dictationary(input) {

    let output = {};

    for (let entry of input) {
        entry = JSON.parse(entry);
        let [[term, definition]] = Object.entries(entry);

        output[term] = definition
    }

    let sortedKeys = Object.keys(output).sort((a, b) => { return a.localeCompare(b) });

    sortedKeys.forEach(term => console.log(`Term: ${term} => Definition: ${output[term]}`));

}