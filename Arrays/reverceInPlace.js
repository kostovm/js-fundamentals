function reverceInPlace(arr) {

    let a;
    let b;

    for (let i = 0; i < arr.length / 2; i++) {
        a = arr[i];
        b = arr[arr.length - 1 - i];
        arr[i] = b;
        arr[arr.length - 1 - i] = a;
    }

    console.log(arr.join(" "));

}