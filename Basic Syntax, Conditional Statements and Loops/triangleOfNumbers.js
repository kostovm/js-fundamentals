function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let buffer = "";
        for (let j = 1; j <= i; j++) {
            buffer += i + " ";
        }
        console.log(buffer.trim());
    }
}