// Initial solution

function theatrePromotions(day, age) {

    if (day == "Weekday") {
        if (age >= 0 && age <= 18) {
            console.log("12$");
        } if (age > 18 && age <= 64) {
            console.log("18$");
        } if (age > 64 && age <= 122) {
            console.log("12$")
        } if (age < 0 || age > 122) {
            console.log("Error!")
        }
    } if (day == "Weekend") {
        if (age >= 0 && age <= 18) {
            console.log("15$");
        } if (age > 18 && age <= 64) {
            console.log("20$");
        } if (age > 64 && age <= 122) {
            console.log("15$")
        } if (age < 0 || age > 122) {
            console.log("Error!")
        }
    } if (day == "Holiday") {
        if (age >= 0 && age <= 18) {
            console.log("5$");
        } if (age > 18 && age <= 64) {
            console.log("12$");
        } if (age > 64 && age <= 122) {
            console.log("10$")
        } if (age < 0 || age > 122) {
            console.log("Error!")
        }
    }
}

// Solution after revisiting the task

function teathrePromotions(day, age) {

    switch (day) {
        case 'Weekday':
            if (age < 0 || age > 122) {
                console.log('Error!');
            } else if (age < 19) {
                console.log(`${12}$`);
            } else if (age < 65) {
                console.log(`${18}$`);
            } else {
                console.log(`${12}$`);
            };
            break;
        case 'Weekend':
            if (age < 0 || age > 122) {
                console.log('Error!');
            } else if (age < 19) {
                console.log(`${15}$`);
            } else if (age < 65) {
                console.log(`${20}$`);
            } else {
                console.log(`${15}$`);
            };
            break;
        case 'Holiday':
            if (age < 0 || age > 122) {
                console.log('Error!');
            } else if (age < 19) {
                console.log(`${5}$`);
            } else if (age < 65) {
                console.log(`${12}$`);
            } else {
                console.log(`${10}$`);
            };
            break;
    }

}