// Initial solution

function sumDigits(num) {

    let sum = 0;

    let numAsString = num.toString();

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    console.log(sum)

}

// Solution after revisiting the task

function sumDigits2 (number) {

    let sum = 0;

    while (number > 0){
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sum);

}