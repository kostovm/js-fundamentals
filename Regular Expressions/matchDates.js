function matchDates(input) {

    input = input[0];

    let regExp = /\b(?<day>\d{2})(?<delimiter>[.\-\/])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})\b/g;
    let match = regExp.exec(input);

    while (match !== null) {
        let day = match.groups.day;
        let month = match.groups.month;
        let year = match.groups.year;

        match = regExp.exec(input);

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

}