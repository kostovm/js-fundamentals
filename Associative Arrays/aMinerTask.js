function aMinerTask(input) {

    let minedMaterials = {};

    for (let i = 0; i < input.length; i += 2) {
        let material = input[i];
        let quantity = Number(input[i + 1]);

        if (minedMaterials.hasOwnProperty(material)) {
            minedMaterials[material] += quantity;
        } else {
            minedMaterials[material] = quantity
        }
    }

    let materials = Object.keys(minedMaterials);
    for (let material of materials) {
        console.log(`${material} -> ${minedMaterials[material]}`);
    }

}