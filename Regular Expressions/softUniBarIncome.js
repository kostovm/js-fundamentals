function softUniBarIncome(input) {

    let totalSum = 0;

    let regExp = /[^\|$%.]*%(?<name>[A-Z][a-z]*)%[^\|$%.]*<(?<product>[\w]+)>[^\|$%.]*\|(?<quantity>[0-9]+)\|[^\|$%.\d]*(?<price>[0-9]+\.?\d*)\$/;

    for (let line of input) {
        let match = regExp.exec(line);
        if (line === "end of shift") {
            break;
        } else {
            if (match !== null) {
                let price = Number(match.groups.price) * Number(match.groups.quantity);
                console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
                totalSum += price;
            }
        }

    }

    console.log(`Total income: ${totalSum.toFixed(2)}`)

}