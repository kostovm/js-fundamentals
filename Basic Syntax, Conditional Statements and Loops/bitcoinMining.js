// Initial solution

function bitcoinMining(input) {

    const bitcoinValue = 11949.16;
    const goldValue = 67.51;

    let noBitcoins = true;
    let firstPurchas = 0;

    bitcoinsOwned = 0;
    levaOwned = 0;

    for (let i = 0; i < input.length; i++) {
        if ((i + 1) % 3 === 0) {
            levaOwned += (input[i] * 0.7) * goldValue;
            if (levaOwned >= bitcoinValue) {
                let bitcoinBought = Math.floor(levaOwned / bitcoinValue);
                bitcoinsOwned += bitcoinBought;
                levaOwned -= bitcoinBought * bitcoinValue;
                if (noBitcoins === true) {
                    firstPurchas = i + 1;
                    noBitcoins = false
                }
            }
        } else {
            levaOwned += input[i] * goldValue;
            if (levaOwned >= bitcoinValue) {
                let bitcoinBought = Math.floor(levaOwned / bitcoinValue);
                bitcoinsOwned += bitcoinBought;
                levaOwned -= bitcoinBought * bitcoinValue;
                if (noBitcoins === true) {
                    firstPurchas = i + 1;
                    noBitcoins = false
                }
            }
        }
    }


    console.log(`Bought bitcoins: ${bitcoinsOwned}`);
    if (noBitcoins === false) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchas}`);
    }
    console.log(`Left money: ${levaOwned.toFixed(2)} lv.`);

}

// Solution after revisiting the task

function mining (events) {

    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let walet = 0;
    let bitcoinsOwned = 0;
    let firstBitcoin = 0;

    let day = 0;

    for (let i = 0; i <events.length; i++){
        day++;
        let minedGold = events[i];

        if (day % 3 === 0){
            minedGold *= 0.7
        }

        walet += minedGold * goldPrice;

        if (walet >= bitcoinPrice){
            while (walet >= bitcoinPrice) {
                walet -= bitcoinPrice;
                bitcoinsOwned++;
                if (firstBitcoin === 0){
                    firstBitcoin = day;
                }
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsOwned}`);
    if (firstBitcoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${walet.toFixed(2)} lv.`);

}