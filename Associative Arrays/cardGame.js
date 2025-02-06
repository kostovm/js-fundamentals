function cardGame (input) {

    let cardPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    let results = new Map();

    for (let player of input){
        let [name, cardString] = player.split(': ');
        let cards = cardString.split(', ');

        if (!results.has(name)){
            results.set(name, []);
        }

        for (let card of cards){
            if (!results.get(name).includes(card)){
                results.get(name).push(card);
            }
        }

    }

    for (let [name, cards] of results){

        let points = cards.reduce((acc, card) => {
            power = card.split('');
            if (power[1] !== '0'){
                acc += cardPower[power[0]] * cardPower[power[1]];
            } else {
                acc += cardPower['10'] * cardPower[power[2]];
            }
            return acc;
        }, 0)
        
        console.log(`${name}: ${points}`)
    }

}