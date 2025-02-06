function city(cityInfo) {
    for (let key of Object.keys(cityInfo)) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}

// Slightly different solution

function city(obj) {

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

}