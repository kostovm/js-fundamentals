// Initial solution

function schoolGrades(input) {
    let studentGrades = {};
    let names = [];

    function averageGrade(name, list) {
        let gradeCounter = 0;
        let sum = 0;
        for (let line of list) {
            let currentLine = line.split(" ");
            if (currentLine[0] === name) {
                for (let i = 1; i < currentLine.length; i++) {
                    sum += Number(currentLine[i]);
                    gradeCounter++;
                }
            }
        }
        let averageGrade = sum / gradeCounter;
        return averageGrade
    }

    for (let line of input) {
        let name = line.split(" ")[0];
        if (names.includes(name) === false) {
            names.push(name);
        }
    }

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        studentGrades[name] = averageGrade(name, input).toFixed(2);
    }

    let sortKeys = Object.keys(studentGrades).sort((a, b) => a.localeCompare(b));
    for (let key of sortKeys) {
        console.log(`${key}: ${studentGrades[key]}`)
    }

}

// Solution after revisiting the task

function studentGrades(input) {

    let listOfStudents = new Map();

    for (let student of input) {
        studentInfo = student.split(' ');
        let name = studentInfo.splice(0, 1)[0];

        if (!listOfStudents.has(name)) {
            listOfStudents.set(name, studentInfo);
        } else {
            let oldGrades = listOfStudents.get(name);
            let newGrades = [...oldGrades, ...studentInfo];
            listOfStudents.set(name, newGrades);
        }
    }

    listOfStudents = Array.from(listOfStudents);
    listOfStudents.sort((a, b) => { return a[0].localeCompare(b[0]) });
    listOfStudents = new Map(listOfStudents);

    for (let student of listOfStudents) {
        console.log(`${student[0]}: ${(student[1].map(Number).reduce((a, x) => a + x, 0) / student[1].length).toFixed(2)}`)
    }

}