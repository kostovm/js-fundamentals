function lettersChangeNumbers(input) {

    let result = 0;

    let combinations = input.replace(/\s+/g, ' ').trim().split(" ");

    function alphabetMatematics(char, number, position) {
        let charPosition = 0;
        let isLowerCase = true;
        let result = 0;

        if (char.charCodeAt(0) < 91) {
            charPosition = char.charCodeAt(0) - 64;
            isLowerCase = false;
        } else {
            charPosition = char.charCodeAt(0) - 96;
        }
        switch (position) {
            case "first":
                if (isLowerCase) {
                    result = number * charPosition;
                } else {
                    result = number / charPosition;
                } break;
            case "second":
                if (isLowerCase) {
                    result = number + charPosition;
                } else {
                    result = number - charPosition;
                } break;
        }

        return result;
    }

    for (let combination of combinations) {
        let a = combination[0];
        let b = combination[combination.length - 1];
        let number = Number(combination.substring(1, combination.length - 1));

        let midResult = alphabetMatematics(a, number, "first");
        result += alphabetMatematics(b, midResult, "second");
    }
    console.log(result.toFixed(2));
}