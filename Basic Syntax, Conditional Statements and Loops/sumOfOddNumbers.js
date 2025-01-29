// Initial solution

function sumOfOddNumbers(n) {

    let sum = 0;

    for (let i = 1; i <= n * 2; i++) {

        if (i % 2 != 0) {
            console.log(i);
            sum += i;
        }
    }

    console.log(`Sum: ${sum}`);
}

// Solution after revisiting the task

function sumOfOldNumbers(n) {

    let sum = 0;
    let a = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a);
        sum += a;
        a += 2;
    }

    console.log(`Sum: ${sum}`)

}