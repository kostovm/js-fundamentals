function dungeon(input) {

    let health = 100;
    let coins = 0;
    let heroIsAlive = true;

    let commands = input[0].split('|');

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');

        if (heroIsAlive) {

            switch (currentCommand[0]) {
                case 'potion':
                    previousHealth = health;
                    health = Math.min(health + Number(currentCommand[1]), 100);
                    console.log(`You healed for ${health - previousHealth} hp.`);
                    console.log(`Current health: ${health} hp.`)
                    break;
                case 'chest':
                    console.log(`You found ${currentCommand[1]} coins.`);
                    coins += Number(currentCommand[1]);
                    break;
                default:
                    health -= Number(currentCommand[1]);
                    if (health <= 0) {
                        heroIsAlive = false;
                        console.log(`You died! Killed by ${currentCommand[0]}.`);
                        console.log(`Best room: ${i + 1}`);
                    } else {
                        console.log(`You slayed ${currentCommand[0]}.`)
                    }
            }

        }
    }

    if (heroIsAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}