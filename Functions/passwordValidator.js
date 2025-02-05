// Initial solution

function passwordValidator(password) {

    let validator1 = password.length > 5 && password.length < 11;
    let validator2 = /^[A-Za-z0-9]*$/.test(password);
    let validator3 = password.replace(/[^0-9]/g, "").length > 1;

    if (validator1 === true && validator2 === true && validator3 === true) {
        console.log(`Password is valid`);
    } else {
        if (validator1 === false) {
            console.log(`Password must be between 6 and 10 characters`);
        }
        if (validator2 === false) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (validator3 === false) {
            console.log(`Password must have at least 2 digits`);
        }
    }

}

// Solution after revisiting the task

function validator(password) {

    let errors = [];


    if (password.length < 6 || password.length > 10) errors.push('Password must be between 6 and 10 characters');
    if (/^[A-Za-z0-9]*$/.test(password) === false) errors.push('Password must consist only of letters and digits');
    if (/\d.*\d/.test(password) === false) errors.push('Password must have at least 2 digits');

    console.log(errors.length === 0 ? 'Password is valid' : errors.join("\r\n"));
}