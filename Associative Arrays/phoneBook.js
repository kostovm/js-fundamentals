function phoneBook(input) {

    let book = {}

    for (let entry of input) {
        let [name, number] = entry.split(' ');
        book[name] = number;
    }

    for (let key in book) {
        console.log(`${key} -> ${book[key]}`);
    }

}