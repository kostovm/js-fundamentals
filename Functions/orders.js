function order(product, quontity) {

    let cost = 0;

    switch (product) {
        case 'coffee':
            cost = 1.5;
            break;
        case 'water':
            cost = 1;
            break;
        case 'coke':
            cost = 1.4;
            break;
        case 'snacks':
            cost = 2;
            break;
    }

    console.log((cost * quontity).toFixed(2));

}