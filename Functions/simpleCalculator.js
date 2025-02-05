function calculator(a, b, operator) {

    let calculate;

    switch (operator) {
        case 'multiply':
            calculate = (x, y) => x * y;
            break;
        case 'divide':
            calculate = (x, y) => x / y;
            break;
        case 'add':
            calculate = (x, y) => x + y;
            break;
        case 'subtract':
            calculate = (x, y) => x - y;
            break;
    }

    console.log(calculate(a, b))

}