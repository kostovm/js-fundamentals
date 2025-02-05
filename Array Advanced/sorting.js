// Initial solution

function sorting(input) {

    input = input.sort((a, b) => b - a);

    let result = [];

    while (input.length > 1) {
        let a = input.pop();
        let b = input.shift();
        result.push(b)
        result.push(a);
    }
    result.push(input[0]);
    console.log(result.join(" ").trim());

}

// Solution after revisiting the task

function sorting(input) {

    input = input.sort((a, b) => { return a - b });
    let output = [];

    for (let i = 0; i < Math.floor(input.length / 2); i++) {

        output.push(input[input.length - 1 - i]);
        output.push(input[i]);

    }

    input.length % 2 !== 0 ? output.push(input[Math.floor(input.length / 2)]) : null;

    console.log(output.join(' '));

}