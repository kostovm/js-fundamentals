// Initial solution

function divisibleBy3() {

    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// Solution after revisiting the task

function divisibleBy3() {

    for (let i = 3; i < 100; i += 3) {
        console.log(i);
    }

}