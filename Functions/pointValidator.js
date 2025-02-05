function pointValidator(arr) {
    let [x1, y1, x2, y2] = arr;

    let findDistance = (a, b, c, d) => {
        return Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
    }

    let isInteger = (num) => Math.abs(num - Math.round(num)) < Number.EPSILON;

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isInteger(findDistance(x1, y1, 0, 0)) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isInteger(findDistance(x2, y2, 0, 0)) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isInteger(findDistance(x1, y1, x2, y2)) ? 'valid' : 'invalid'}`);
}