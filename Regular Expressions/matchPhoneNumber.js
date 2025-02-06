function matchPhoneNumber(input) {

    let phones = [];

    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let match = regex.exec(input);

    while (match !== null) {
        phones.push(match[0]);
        match = regex.exec(input)
    }

    console.log(phones.join(", "))

}