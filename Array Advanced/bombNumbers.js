// Initial solution

function bombNumbers(arrA, arrB) {

    let bomb = arrB[0];
    let power = arrB[1];

    let result = 0;

    while (arrA.includes(bomb)) {
        if (arrA.indexOf(bomb) <= power) {
            arrA.splice(0, arrA.indexOf(bomb));
        } else {
            arrA.splice(arrA.indexOf(bomb) - power, power);
        };
        if (arrA.length - 1 <= power) {
            arrA.splice(arrA.indexOf(bomb));
        } else {
            arrA.splice(arrA.indexOf(bomb), power + 1);
        }
    }

    for (let el of arrA) {
        result += el;
    }
    console.log(result)

}

// Solution after revisiting the task

function bombs(arr, detonator) {

    let [bomb, bombPower] = detonator;

    while (arr.includes(bomb)) {
        let index = arr.indexOf(bomb);
        arr.splice(index + 1, Math.min(bombPower, arr.length - 1));
        arr.splice(Math.max(index - bombPower, 0), index - Math.max(index - bombPower, 0) + 1);
    }

    console.log(arr.reduce((a, n) => a + n, 0))

}