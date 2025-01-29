// Initial solution

function foreignLanguages(country) {

    switch (country) {
        case "England":
        case "USA": console.log("English"); break;
        case "Spain":
        case "Argentina":
        case "Mexico": console.log("Spanish"); break;
        default: console.log("unknown"); break;
    }
}

// Solution after revisiting the task:

function foreignLanguages(country) {

    let output = "";

    if (country === "USA" || country === "England") {
        output = "English";
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        output = "Spanish";
    } else {
        output = "unknown";
    }

    console.log(output);

}