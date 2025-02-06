function towns(input) {
    let townInfo = {}

    for (let el of input) {
        let currentTown = el.split(" | ");
        townInfo.town = currentTown[0];
        townInfo.latitude = Number(currentTown[1]).toFixed(2);
        townInfo.longitude = Number(currentTown[2]).toFixed(2);
        console.log(townInfo);
    }
}