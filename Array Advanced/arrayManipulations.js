function arrayManipulation(input) {

    let output = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let currentCommand = input[i].split(' ');

        switch (currentCommand[0]) {
            case 'Add':
                output.push(currentCommand[1]);
                break;
            case 'Remove':
                while (output.includes(currentCommand[1])) {
                    let index = output.indexOf(currentCommand[1]);
                    output.splice(index, 1);
                };
                break;
            case 'RemoveAt':
                output.splice(currentCommand[1], 1);
                break;
            case 'Insert':
                output.splice(currentCommand[2], 0, currentCommand[1]);
                break;
        }
    }

    console.log(output.join(' '));

}