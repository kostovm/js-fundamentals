// Initial solution

function vacation(number, type, day) {

    let totalPrice = 0;
    let singlePrice = 0;

    switch (type) {
        case "Students":
            if (day == "Friday") {
                singlePrice = 8.45;
            } else if (day == "Saturday") {
                singlePrice = 9.80;
            } else {
                singlePrice = 10.46;
            }
            if (number > 29) {
                totalPrice = (number * singlePrice) * 0.85;
            } else {
                totalPrice = (number * singlePrice);
            }
            break;
        case "Business":
            if (day == "Friday") {
                singlePrice = 10.90;
            } else if (day == "Saturday") {
                singlePrice = 15.60;
            } else {
                singlePrice = 16;
            }
            if (number > 99) {
                totalPrice = (number * singlePrice) - (10 * singlePrice);
            } else {
                totalPrice = (number * singlePrice);
            }
            break;
        case "Regular":
            if (day == "Friday") {
                singlePrice = 15;
            } else if (day == "Saturday") {
                singlePrice = 20;
            } else {
                singlePrice = 22.50;
            }
            if (number > 9 && number < 21) {
                totalPrice = (number * singlePrice) * 0.95;
            } else {
                totalPrice = (number * singlePrice);
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

// Solution after revisiting the task

function vacantion(groupSize, groupType, dayOfVisit) {

    let pricePerPerson = 0;
    let discountGroup = '';


    switch (groupType) {
        case "Students":
            discountGroup = "S";
            if (dayOfVisit === "Friday") {
                pricePerPerson = 8.45;
            } else if (dayOfVisit === 'Saturday') {
                pricePerPerson = 9.8;
            } else if (dayOfVisit === "Sunday") {
                pricePerPerson = 10.46;
            };
            break;
        case "Business":
            discountGroup = "B";
            if (dayOfVisit === "Friday") {
                pricePerPerson = 10.9;
            } else if (dayOfVisit === 'Saturday') {
                pricePerPerson = 15.6;
            } else if (dayOfVisit === "Sunday") {
                pricePerPerson = 16;
            };
            break;
        case 'Regular':
            discountGroup = "R";
            if (dayOfVisit === "Friday") {
                pricePerPerson = 15;
            } else if (dayOfVisit === 'Saturday') {
                pricePerPerson = 20;
            } else if (dayOfVisit === "Sunday") {
                pricePerPerson = 22.5;
            };
            break;
    }

    let totalPrice = groupSize * pricePerPerson;

    if (discountGroup === "S" && groupSize >= 30){
        totalPrice *= 0.85;
    } else if (discountGroup === "B" && groupSize >= 100){
        totalPrice -= pricePerPerson * 10;
    } else if (discountGroup === "R" && groupSize >= 10 && groupSize <= 20){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}