// Initial solution

function storeProvision(inStock, ordered) {

    let store = {}

    for (let i = 0; i < ordered.length - 1; i += 2) {
        if (inStock.includes(ordered[i]) === false) {
            inStock.push(ordered[i]);
            inStock.push(ordered[i + 1]);
        } else {
            let alreadyInStock = inStock.indexOf(ordered[i]);
            let newAmount = Number(inStock[alreadyInStock + 1]) + Number(ordered[i + 1]);
            inStock[alreadyInStock + 1] = newAmount;

        }
    }

    for (i = 0; i < inStock.length; i += 2) {
        let product = inStock[i];
        let quantity = inStock[i + 1];
        store[product] = quantity;
    }

    for (let key of Object.keys(store)) {
        console.log(key + " -> " + store[key]);
    }
}

// Solution after revisiting the task

function store(stock, ordered) {

    let storage = {};

    for (let i = 0; i < stock.length; i += 2) {
        storage[stock[i]] = Number(stock[i + 1]);
    }

    for (let j = 0; j < ordered.length; j += 2) {
        if (storage[ordered[j]] !== undefined) {
            storage[ordered[j]] = storage[ordered[j]] + Number(ordered[j + 1]);
        } else {
            storage[ordered[j]] = Number(ordered[j + 1]);
        }
    }

    for (let [product, quantity] of Object.entries(storage)) {
        console.log(`${product} -> ${quantity}`);
    }

}