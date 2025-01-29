function sortNumbers() {

    let newArr = Array.from(arguments);

    let sorted = newArr.sort(function (a, b) { return b - a })

    for (let i = 0; i < 3; i++) {
        console.log(sorted[i]);
    }

}