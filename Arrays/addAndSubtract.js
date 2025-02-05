function addAndSubtract(arr) {

    let sumOld = 0;
    let sumNew = 0;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        sumOld += current;

        if (current % 2 == 0) {
            current += i;
        } else {
            current -= i;
        }
        arr[i] = current;

        sumNew += current
    }

    console.log(arr);
    console.log(sumOld);
    console.log(sumNew);
}