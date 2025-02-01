function integerOrFloat(a, b, c) {

    let sum = a + b + c;

    let result = sum % 1 !== 0 ? 'Float' : 'Integer';

    console.log(`${sum} - ${result}`);

}