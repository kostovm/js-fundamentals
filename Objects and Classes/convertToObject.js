function convertToObject(input) {

    let newObj = JSON.parse(input)

    for (let [key, value] of Object.entries(newObj)) {
        console.log(`${key}: ${value}`)
    }

}