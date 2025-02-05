function firstAndLast(arr) {

    arr = arr.map(Number);

    console.log(arr.length > 1 ? arr[0] + arr[arr.length - 1] : arr[0]);

}