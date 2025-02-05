function gladiator(input) {

    let inventory = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let current = input[i].split(' ');
        let command = current[0];

        switch (command) {
            case 'Buy':
                if (!inventory.includes(current[1])) {
                    inventory.push(current[1]);
                };
                break;
            case 'Trash':
                if (inventory.includes(current[1])) {
                    let index = inventory.indexOf(current[1]);
                    inventory.splice(index, 1);
                };
                break;
            case 'Repair':
                if (inventory.includes(current[1])) {
                    let index = inventory.indexOf(current[1]);
                    let repaired = inventory.splice(index, 1);
                    inventory.push(repaired[0]);
                };
                break;
            case 'Upgrade':
                let [item, upgrade] = current[1].split('-');
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index + 1, 0, `${item}:${upgrade}`);
                };
                break;
        }
    }

    console.log(inventory.join(' '));

}