function printAndSum(begin, end) {

    let sum = 0;
    let count = "";

    for (let i = begin; i <= end; i++) {
        sum += i;
        count += i + " ";
    }

    console.log(count.trim());
    console.log(`Sum: ${sum}`);

}