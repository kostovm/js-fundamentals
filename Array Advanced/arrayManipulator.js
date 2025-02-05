function arrayManipulator(arr, commands) {

    for (let command of commands) {
        command = command.split(' ');
        let mainCommand = command[0];

        switch (mainCommand) {
            case 'add':
                arr.splice(Number(command[1]), 0, Number(command[2]));
                break;
            case 'addMany':
                let index = Number(command[1]);
                for (let i = 2; i < command.length; i++) {
                    arr.splice(index, 0, Number(command[i]));
                    index++;
                }
                break;
            case 'contains':
                arr.includes(Number(command[1])) ? result = arr.indexOf(Number(command[1])) : result = -1;
                console.log(result);
                break;
            case 'remove':
                arr.splice(command[1], 1);
                break;
            case 'shift':
                let count = command[1];
                while (count > 0) {
                    let a = arr.shift();
                    arr.push(a);
                    count--;
                }
                break;
            case 'sumPairs':
                let newArr = []
                arr.length % 2 !== 0 ? arr.push(0) : null;
                for (let i = 1; i < arr.length; i += 2) {
                    newArr.push(arr[i] + arr[i - 1]);
                }
                arr = newArr;
                break;
            case 'print':
                return console.log(`[ ${arr.join(', ')} ]`);
        }
    }

}