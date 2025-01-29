// Initial solution

function numbersFromNto1(n) {

    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}

// Solution after revisiting the task

function numbersFromNTo1(n) {

    while (n > 0) {
        console.log(n);
        n--;
    }
}