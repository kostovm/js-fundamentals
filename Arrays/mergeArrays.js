// Initial solution

function mergeArrays(arr1, arr2) {

    let arrNew = [];

    for (let i = 0; i < arr1.length; i++) {

        let elementEven = 0;
        let elementOdd = "";

        elementEven = Number(arr1[i]) + Number(arr2[i]);

        arrNew.push(elementEven);

        i++;
        if (i < arr1.length) {
            elementOdd = String(arr1[i]) + String(arr2[i]);
        } else {
            break;
        }

        arrNew.push(elementOdd);

    }

    console.log(arrNew.join(' - '));

}

// Solution after revisiting the task

function merge(arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let a;
        if (i % 2 === 0) {
            a = Number(arr1[i]) + Number(arr2[i]);
        } else {
            a = arr1[i] + arr2[i];
        }
        newArr.push(a);
    }

    console.log(newArr.join(' - '));

}