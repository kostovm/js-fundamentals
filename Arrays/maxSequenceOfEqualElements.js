// Initial solution

function maxSequenceOfEqualElements(arr) {

    let maxCounter = 0;
    let result = "";

    for (let i = 0; i < arr.length - 1; i++) {
        let currentNumber = arr[i];
        let nextNumber = i + 1;
        let currentCounter = 1;
        for (let j = nextNumber; j < arr.length; j++) {
            let checkNumber = arr[j];
            if (currentNumber === checkNumber) {
                currentCounter++;
            } else {
                break;
            }
        }
        if (currentCounter > maxCounter) {
            maxCounter = currentCounter;
            result = (currentNumber + " ").repeat(currentCounter);
        }
    }

    console.log(result.trim())

}

// Solution after revisiting the task

function maxSequence(arr) {

    let max = [];
    let current = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== current[0]) {
            if (current.length > max.length) {
                max = current;
            }

            current = [];
        }
        current.push(arr[i]);
    }

    if (current.length > max.length) {
        max = current;
    }

    console.log(max.join(' '));

}