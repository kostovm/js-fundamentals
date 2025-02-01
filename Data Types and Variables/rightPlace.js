function rightPlace(string1, char, string2) {

    let filledStr = String(string1).replace("_", char);

    let output = filledStr === string2 ? "Matched" : "Not Matched";

    console.log(output);

}