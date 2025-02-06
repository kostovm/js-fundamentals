function storage(input) {

    let map = new Map();

    for (let line of input) {
        let product = line.split(" ")[0];
        let quantity = Number(line.split(" ")[1]);
        if (map.has(product)) {
            let currentQuantity = map.get(product);
            map.set(product, quantity + currentQuantity)
        } else {
            map.set(product, quantity)
        }
    }
    for (const [product, quantity] of map) {
        console.log(`${product} -> ${quantity}`);
    }
}