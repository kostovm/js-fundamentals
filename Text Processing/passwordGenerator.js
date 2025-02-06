function passwordGenerator(input) {

    let firstWord = input[0];
    let secondWord = input[1];
    let thirdWord = input[2].repeat(100);
    let vowelcounter = 0;

    let password = (firstWord + secondWord).split("");

    for (let i = 0; i < password.length; i++) {
        if (password[i] === "a" || password[i] === "e" || password[i] === "i" || password[i] === "o" || password[i] === "u") {
            password[i] = thirdWord[vowelcounter].toUpperCase();
            vowelcounter++;
        }
    }

    password = password.reverse();

    console.log(`Your generated password is ${password.join("")}`);

}