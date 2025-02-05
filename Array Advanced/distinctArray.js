// Initial solution

function distinctArray(arr) {

    let arrCopy = arr.slice();
    let buff = [];

    for (let i = 0; i < arr.length; i++) {
        let x = arrCopy.shift()
        if (buff.includes(x) === false) {
            buff.push(x);
        }
    }

    arr = buff.slice();
    console.log(arr.join(" "));

}

// Solution after revisiting the task

function noRepeat(input) {

    let noRepeatArray = [];

    for (let el of input) {
        noRepeatArray.includes(el) ? null : noRepeatArray.push(el);
    }

    console.log(noRepeatArray.join(' '));

}