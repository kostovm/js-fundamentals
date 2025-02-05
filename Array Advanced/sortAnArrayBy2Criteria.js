function sortAnArrayBy2Criteria(input) {

    let sorted = input.sort((a, b) => { return a.length - b.length || a.localeCompare(b) })

    for (let el of sorted) {
        console.log(el);
    }
}