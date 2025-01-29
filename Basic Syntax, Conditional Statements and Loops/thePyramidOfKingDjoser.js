// Initial solution

function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let hight = 0;

    for (let i = base; i > 0; i -= 2) {
        hight++;
        if (i - 2 < 1) {
            gold = (i * i) * increment
        } else if (hight % 5 !== 0) {
            let currentStepStone = (i - 2) * (i - 2);
            let currentStepMarble = (i * i) - currentStepStone;
            stone += currentStepStone * increment;
            marble += currentStepMarble * increment
        } else {
            let currentStepStone = (i - 2) * (i - 2);
            let currentStepLapis = (i * i) - currentStepStone;
            stone += currentStepStone * increment;
            lapisLazuli += currentStepLapis * increment
        }
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(hight * increment)}`)

}

// Solution after revisiting the task

function joserPyramid (base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let totalSteps = 0;

    for (let i = base; i>0; i -= 2){
        let material = Math.pow(i, 2)*increment;
        let stoneForTheStep = Math.pow(i-2, 2)*increment;
        totalSteps++;
        if (i - 2 <=0) {
            gold = material;
        } else if (totalSteps % 5 === 0){
            stone += stoneForTheStep;
            lapis += material - stoneForTheStep;
        } else {
            stone += stoneForTheStep;
            marble += material - stoneForTheStep;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalSteps * increment)}`);
}