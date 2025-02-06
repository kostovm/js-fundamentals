function race(input) {

    let results = {};

    let runners = input.splice(0, 1)[0].split(", ");
    for (let runner of runners) {
        results[runner] = 0;
    }

    let regName = /[A-Za-z]/g;
    let regScore = /[0-9]/g;


    for (let line of input) {
        if (line === "end of race") {
            break;
        } else {
            let name = "";
            score = 0;
            let nameMatch = regName.exec(line);
            let scoreMatch = regScore.exec(line);
            while (nameMatch !== null) {
                name += nameMatch[0];
                nameMatch = regName.exec(line);
            }
            while (scoreMatch !== null) {
                score += Number(scoreMatch[0]);
                scoreMatch = regScore.exec(line);
            }

            if (results.hasOwnProperty(name)) {
                results[name] += score;
            }
        }

    }

    let finishLine = Object.entries(results).sort((a, b) => b[1] - a[1]);
    let first =

        console.log(`1st place: ${finishLine[0][0]}\n2nd place: ${finishLine[1][0]}\n3rd place: ${finishLine[2][0]}`);

}