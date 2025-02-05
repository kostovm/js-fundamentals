function magic(arr) {

    let magicSum = 0

    for (let i = 0; i < arr.length; i++) {

        let rowCurrentSum = 0;
        let columnCurrentSum = 0;

        for (let j = 0; j < arr[0].length; j++) {
            if (i === 0) {
                magicSum += arr[i][j];
            }

            rowCurrentSum += arr[i][j];
        }

        for (let k = 0; k < arr.length; k++) {
            columnCurrentSum += arr[k][i];
        }

        if (rowCurrentSum !== magicSum || columnCurrentSum !== magicSum) {
            return console.log('false')
        }

    }

    console.log('true');

}