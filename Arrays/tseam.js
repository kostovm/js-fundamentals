function tseam(arr) {

    let account = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let currentCommand = arr[i].split(' ');

        switch (currentCommand[0]) {
            case 'Install':
                if (!account.includes(currentCommand[1])) {
                    account.push(currentCommand[1])
                };
                break;
            case 'Uninstall':
                if (account.includes(currentCommand[1])) {
                    let index = account.findIndex(el => el === currentCommand[1]);
                    account.splice(index, 1);
                };
                break;
            case 'Update':
                if (account.includes(currentCommand[1])) {
                    let index = account.findIndex(el => el === currentCommand[1]);
                    let updated = account.splice(index, 1);
                    account.push(updated[0]);
                };
                break;
            case 'Expansion':
                let [game, expansion] = currentCommand[1].split('-');
                if (account.includes(game)) {
                    let index = account.findIndex(el => el === game);
                    account.splice(index + 1, 0, `${game}:${expansion}`);
                };
                break;
            case 'Play!':
                return console.log(account.join(" "));
        }
    }

}