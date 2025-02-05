// Initial solution

function charactersInRange(a, b) {

    let result = ""

    let start = Math.min(a.charCodeAt(0), b.charCodeAt(0));
    let end = Math.max(a.charCodeAt(0), b.charCodeAt(0));

    for (let charCode = start + 1; charCode < end; charCode++) {
        result += String.fromCharCode(charCode) + " ";
    }

    console.log(result)

}

// Solution after revisiting the task

function characters(char1, char2) {

    let a = char1.charCodeAt();
    let b = char2.charCodeAt();
    let output = [];

    for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
        let char = String.fromCharCode(i);
        output.push(char);
    }

    console.log(output.join(' '));

}