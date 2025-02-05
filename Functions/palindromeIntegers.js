// Initial solution

function palindromeIntegers(input) {

    function isPalindrome(n) {
        let firstNumber = n;
        m = String(n).split("");
        let secondNumber = "";
        for (let i = m.length - 1; i >= 0; i--) {
            secondNumber += m[i];
        }

        console.log(firstNumber === Number(secondNumber));
    }

    for (let number of input) {
        isPalindrome(number);
    }

}

// Solution after revisiting the task

function palindromes(arr) {

    for (let number of arr.map(String)) {
        let isPalindrom = true;
        for (let i = 0; i < Math.floor(number.length / 2); i++) {
            number[i] === number[number.length - 1 - i] ? null : isPalindrom = false;
        }

        console.log(isPalindrom);
    }

}