// Initial solution

function login(input) {

    let username = input[0]

    let splitString = username.split("");
    let reverseArray = splitString.reverse();
    let password = reverseArray.join("")

    for (let i = 1; ; i++) {

        if (i == 4) {
            if (input[i] == password) {
                console.log(`User ${username} logged in.`);
                break;
            } else {
                console.log(`User ${username} blocked!`);
                break;
            }
        }

        if (input[i] == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log("Incorrect password. Try again.")
        }
    }

}

// Solution after revisiting the task

function login (arr) {

    let userName = arr[0];
    let password = userName.split("").reverse().join('');
    let isloggedIn = false;

    for (let i = 1; i<5; i++){
        if (arr[i] === password && isloggedIn === false){
            isloggedIn = true;
            return console.log(`User ${userName} logged in.`);
        } else {
            if (i !== 4){
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${userName} blocked!`)
            }
        }
    }

}