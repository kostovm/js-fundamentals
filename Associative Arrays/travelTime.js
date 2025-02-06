function travelTime(input) {
    let countriesToVisit = [];
    for (let line of input) {
        let currentDestination = line.split(" > ");
        let name = currentDestination[0];
        if (!countriesToVisit.includes(name)) {
            countriesToVisit.push(name);
        }
        countriesToVisit.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
    }
    for (let country of countriesToVisit) {
        let travelHere = {};
        let readyToPrint = "";
        for (let line of input) {
            let currentDestination = line.split(" > ");
            let currentCountry = currentDestination[0];
            let city = currentDestination[1];
            let price = Number(currentDestination[2]);
            if (currentCountry === country) {
                if (travelHere.hasOwnProperty(city)) {
                    if (travelHere[city] > price) {
                        travelHere[city] = price;
                    }
                } else {
                    travelHere[city] = price
                }
            }
        }
        readyToPrint += country + " ->";
        let sortedCities = Object.entries(travelHere).sort((a, b) => a[1] - b[1]);
        for (let el of sortedCities) {
            readyToPrint += " " + el[0] + " -> " + el[1];
        }
        console.log(readyToPrint)
    }
}