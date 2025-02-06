function convertToJSON(firstName, lastName, hairColor) {
    class Person {
        constructor(firstName, lastName, hairColor) {
            this.name = firstName,
                this.lastName = lastName,
                this.hairColor = hairColor
        }
    }
    let newPerson = new Person(firstName, lastName, hairColor);
    console.log(JSON.stringify(newPerson))
}

// Shorter solution

function convertToJson(name, lastName, hairColor) {

    let info = {
        name,
        lastName,
        hairColor
    }

    let infoAsJSON = JSON.stringify(info);

    console.log(infoAsJSON)

}