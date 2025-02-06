function addressBook(input) {

    let book = {};

    for (let entry of input) {
        let [name, address] = entry.split(':');

        book[name] = address;
    }

    let bookSorted = Object.keys(book).sort((a, b) => { return a.localeCompare(b) });

    for (let name of bookSorted) {
        console.log(name + ' -> ' + book[name]);
    }

}