function dayOfWeek(n) {

    let days = ['Monday', "Tuesday", 'Wednesday', "Thursday", 'Friday', 'Saturday', "Sunday"];

    let output = days[n - 1] !== undefined ? days[n - 1] : 'Invalid day!'

    console.log(output);

}