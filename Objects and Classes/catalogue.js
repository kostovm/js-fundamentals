function catalogue(input) {

    let myCatalogue = {};

    for (let el of input) {
        let currentItem = el.split(" : ")
        let key = currentItem[0];
        myCatalogue[key] = Number(currentItem[1]);
    }

    let sortKey = Object.keys(myCatalogue).sort((keyA, keyB) => keyA.localeCompare(keyB));

    let groupChar = "";
    for (let el of sortKey) {
        if (el[0] !== groupChar) {
            groupChar = el[0];
            console.log(groupChar);
            console.log(`  ${el}: ${myCatalogue[el]}`)
        } else {
            console.log(`  ${el}: ${myCatalogue[el]}`)
        }
    }
}