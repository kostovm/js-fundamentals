function MAGAWall(theWall) {

    theWall = theWall.map(Number);
    const concretePerFoot = 195;
    const concreteCost = 1900;
    let concreteUsed = [];

    while (theWall.length > 0) {
        let completed = [];
        let concreteForTheDay = 0;

        for (let i = 0; i < theWall.length; i++) {
            if (theWall[i] < 30) {
                theWall[i]++;
                concreteForTheDay += concretePerFoot;
            } else {
                completed.unshift(i)
            }
        }

        concreteForTheDay > 0 ? concreteUsed.push(concreteForTheDay) : null;

        for (let completedPart of completed) {
            theWall.splice(completedPart, 1)
        }
    }

    let totalCost = concreteUsed.reduce((cost, forDay) => cost + concreteCost * forDay, 0)

    console.log(concreteUsed.join(', '));
    console.log(`${totalCost} pesos`)

}