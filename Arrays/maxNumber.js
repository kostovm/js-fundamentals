// Initial solution

function maxNumber(input) {

    let readyToPrint = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let numbersToCheck = input.slice(i + 1);
        let isTopInteger = true;
        for (let j = 0; j < numbersToCheck.length; j++) {
            let checkNumber = numbersToCheck[j];
            if (checkNumber >= currentNumber) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger === true) {
            readyToPrint.push(currentNumber);
        }
    }

    console.log(readyToPrint.join(" "))
}

// Solution after revisiting the task

function maxNum(arr) {

    let newArr = [];

    while (arr.length) {
        let a = arr[0];
        let isTop = true;
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] >= a) {
                isTop = false;
            }
        }
        if (isTop) {
            newArr.push(a);
        }
        arr = arr.slice(1);
    }

    console.log(newArr.join(' '));

}