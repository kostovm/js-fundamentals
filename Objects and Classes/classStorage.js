class Storage {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.storage = {};
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage[product.name] = {
            name: product.name,
            price: Number(product.price),
            quantity: Number(product.quantity)
        }

        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
    }

    getProducts() {
        return Object.values(this.storage).map(product => JSON.stringify(product)).join('\n');
    }
}

// INCP!