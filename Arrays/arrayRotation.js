// Initial solution

function arrayRotation(arr, n) {

    for (let j = 0; j < n; j++) {
        let transfer = arr[0];

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1];

        }

        arr[arr.length - 1] = transfer;
    }

    return (arr.join(" "));

}

// Solution after revisiting the task

function rotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        arr.push(arr[0]);
        arr = arr.slice(1);
    }

    console.log(arr.join(' '));

}