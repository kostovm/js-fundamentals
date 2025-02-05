function houseParty(input) {

    let guestlist = [];

    for (let line of input) {
        let name = line.split(" ")[0];
        if (!line.includes("is not")) {
            if (guestlist.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestlist.push(name);
            }
        } else {
            if (guestlist.includes(name)) {
                guestlist.splice(guestlist.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    for (let currentName of guestlist) {
        console.log(currentName);
    }

}