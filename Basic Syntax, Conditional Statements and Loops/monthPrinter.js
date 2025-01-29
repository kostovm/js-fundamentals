// Itinial solution

function monthPrinter(num) {

    switch (num) {
        case 1: console.log("January"); break;
        case 2: console.log("February"); break;
        case 3: console.log("March"); break;
        case 4: console.log("April"); break;
        case 5: console.log("May"); break;
        case 6: console.log("June"); break;
        case 7: console.log("July"); break;
        case 8: console.log("August"); break;
        case 9: console.log("September"); break;
        case 10: console.log("October"); break;
        case 11: console.log("November"); break;
        case 12: console.log("December"); break;
        default: console.log("Error!"); break;
    }
}

// Solution after revisiting the task

function monthPrinter(monthNumber) {

    if (monthNumber < 1 || monthNumber > 12) {
        console.log('Error!');
    } else {
        let date = new Date(2024, monthNumber - 1);
        let month = date.getMonth()

        console.log(date.toLocaleString('default', { month: 'long' }));
    }

}