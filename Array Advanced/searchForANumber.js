function searchForANumber(arrA, arrB) {

    let occurenceCounter = 0;

    let getNumbers = arrB[0];
    let deleteNumbers = arrB[1];
    let searchedNumber = arrB[2];

    let newArr = arrA.splice(0, getNumbers).splice(deleteNumbers);

    for (let el of newArr) {
        if (el === searchedNumber) {
            occurenceCounter++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${occurenceCounter} times.`)

}