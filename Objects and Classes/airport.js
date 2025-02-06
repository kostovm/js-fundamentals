function airport(input) {

    let flights = input[0];
    let statusChange = input[1];
    let infoStatus = input[2][0];

    let flightList = [];

    for (let flight of flights) {
        let [number, destination] = flight.split(' ');

        let newFlight = {
            number,
            destination,
            status: 'Ready to fly'
        }

        flightList.push(newFlight);
    }

    for (let change of statusChange) {
        let [number, newStatus] = change.split(' ');

        let changed = flightList.filter(flight => flight.number === number);

        changed[0] ? changed[0].status = newStatus : null;
    }

    let printStatus = flightList.filter(flight => flight.status === infoStatus);

    for (let flight of printStatus) {
        let destination = flight.destination;
        let status = flight.status;
        console.log(`{ Destination: '${destination}', Status: '${status}' }`)
    }

}