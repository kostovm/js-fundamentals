function reverse(n, arr) {

    let newArr = []

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    let output = newArr.reverse().join(' ');
    console.log(output);

}