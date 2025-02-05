// Initial solution

function equalSums(input) {

    let finalResult = "no"

    function sum(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    }

    for (let currentIndex = 0; currentIndex < input.length; currentIndex++) {
        let leftSum = input.slice(0, currentIndex);
        let rightSum = input.slice(currentIndex + 1);
        if (sum(leftSum) === sum(rightSum)) {
            finalResult = currentIndex;
        }
    }

    console.log(finalResult)

}

// Solution after revisiting the task

function equalSums(arr) {

    let index;

    for (let i = 0; i < arr.length; i++) {
        let left = arr.slice(0, i);
        let right = arr.slice(i + 1);
        sumLeft = left.reduce((a, b) => a + b, 0);
        sumRight = right.reduce((a, b) => a + b, 0);

        if (index === undefined && sumLeft === sumRight) {
            index = i;
        }
    }

    let output = index !== undefined ? index : 'no';
    console.log(output);

}