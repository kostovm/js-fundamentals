function rotation (arr) {

    let n = Number(arr.pop());

    for (let i = 1; i <= n; i++){
        let a = arr.pop();
        arr.unshift(a);
    }

    console.log(arr.join(' '));

}