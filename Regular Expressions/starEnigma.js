function starEnigma(input) {

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 1; i < input.length; i++) {
        let encriptedMessage = input[i];
        let counter = 0;
        let regKeyDoscover = /[SsTtAaRr]/g;
        let match = regKeyDoscover.exec(encriptedMessage);
        while (match !== null) {
            counter++;
            match = regKeyDoscover.exec(encriptedMessage);
        }
        let decriptedMessage = "";
        for (let char of encriptedMessage) {
            let newChar = String.fromCharCode(char.charCodeAt(0) - counter);
            decriptedMessage += newChar;
        }

        let regInformation = /[^@\-!:>]*@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)[^@\-!:>]*/;
        let isValid = regInformation.exec(decriptedMessage);
        if (isValid !== null) {
            if (isValid.groups.attackType === "A") {
                attackedPlanets.push(isValid.groups.planetName);
            } else if (isValid.groups.attackType === "D") {
                destroyedPlanets.push(isValid.groups.planetName);
            }
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
}