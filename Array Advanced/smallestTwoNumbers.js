function smallestNumbers(arr) {

    return arr.sort((a, b) => { return a - b }).slice(0, 2).join(' ');

}