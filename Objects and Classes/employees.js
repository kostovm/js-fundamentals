function employees(names) {
    class Employee {
        constructor(name) {
            this.name = name
            this.personalNumber = name.length;
        }
    }

    for (let el of names) {
        let newName = new Employee(el);
        let currentEmployee = Object.values(newName);
        console.log(`Name: ${currentEmployee[0]} -- Personal Number: ${currentEmployee[1]}`);
    }
}

// Shorter solution

function employees(input) {

    for (let name of input) {
        let employeeInfo = {
            name,
            number: name.length
        }

        console.log(`Name: ${employeeInfo.name} -- Personal Number: ${employeeInfo.number}`)
    }

}