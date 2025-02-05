// Initial solution

function train(arr) {

    let trainFinal = arr[0].split(" ").map(Number);
    let maxSeats = Number(arr[1]);
    let comands = arr.slice(2);
    let newPassangers = [];

    for (let i = 0; i < comands.length; i++) {

        if (comands[i].includes("Add")) {
            let adding = comands[i].split(' ');
            trainFinal.push(adding[1]);
        } else {
            newPassangers.push(comands[i])
        }
    }

    for (let j = 0; j < newPassangers.length; j++) {
        let currPassangers = Number(newPassangers[j]);
        for (let k = 0; k < trainFinal.length; k++) {
            if (currPassangers + trainFinal[k] <= maxSeats) {
                trainFinal[k] = currPassangers + trainFinal[k];
                break;
            }
        }
    }
    console.log(trainFinal.join(" "));

}

// Solution after revisiting the task

function train(input) {

    let theTrain = input[0].split(' ').map(Number);
    let capacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        if (input[i].includes('Add')) {
            let newCart = input[i].split(' ');
            theTrain.push(Number(newCart[1]));
        } else {
            for (let j = 0; j < theTrain.length; j++) {
                if (Number(theTrain[j]) + Number(input[i]) <= capacity) {
                    theTrain[j] = Number(theTrain[j]) + Number(input[i]);
                    break;
                }
            }
        }
    }

    console.log(theTrain.join(' '));

}