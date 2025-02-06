function matchFullName(input) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = input.match(regex);

    console.log(match.join(" "));

}