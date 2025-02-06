function extractEmails(input) {

    let emailValidator = /[\s][A-Za-z][A-Za-z-_.]*@[A-Za-z][A-Za-z-]*(\.[A-Za-z][A-Za-z-]*)+/g;
    let match = emailValidator.exec(input);

    while (match !== null) {
        console.log(match[0].trim());
        match = emailValidator.exec(input);
    }

}