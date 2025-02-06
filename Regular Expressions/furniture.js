function furniture(input) {

    let boughtFurniture = "";
    let moneySpend = 0;

    let stop = input.indexOf("Purchase");
    input.splice(stop);
    input = input.join(" ");

    console.log(`Bought furniture:`)

    let regex = />>(?<product>[A-Z][A-Za-z]*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;

    let match = regex.exec(input);

    while (match !== null) {
        console.log(match.groups.product);
        moneySpend += (Number(match.groups.price) * Number(match.groups.quantity));
        match = regex.exec(input)
    }
    console.log(`Total money spend: ${moneySpend.toFixed(2)}`);
}