function piccolo(input) {
    let parkingLot = {};
    let carsCount = 0;
    for (let line of input) {
        let currentComand = line.split(", ")[0];
        let currentCar = line.split(", ")[1];
        if (currentComand === "IN") {
            parkingLot[currentCar] = "in";
            carsCount++;
        } else if (currentComand === "OUT") {
            delete parkingLot[currentCar];
            carsCount--
        }
    }
    let sortedCars = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));
    if (carsCount === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let car of sortedCars) {
            console.log(car);
        }
    }
}