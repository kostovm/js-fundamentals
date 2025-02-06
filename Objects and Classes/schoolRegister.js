function schoolRegister(input) {

    let allStudents = []

    for (let entry of input) {
        let studentInfo = entry.split(', ');
        let name = studentInfo[0].split(': ')[1];
        let grade = Number(studentInfo[1].split(': ')[1]);
        let score = Number(studentInfo[2].split(': ')[1]);

        let newStudent = {
            name,
            grade,
            score
        }

        allStudents.push(newStudent)
    }

    allStudents.sort((a, b) => { return a.grade - b.grade });

    let currentGrade;
    let studentsPassing = [];
    let scores = [];

    for (let student of allStudents) {

        if (student.grade === currentGrade) {

            if (student.score >= 3) {
                studentsPassing.push(student.name);
                scores.push(student.score);
            }

        } else {

            if (studentsPassing.length > 0) {
                console.log(`${currentGrade + 1} Grade`);
                console.log(`List of students: ${studentsPassing.join(', ')}`);
                console.log(`Average annual score from last year: ${((scores.reduce((a, x) => a + x, 0)) / scores.length).toFixed(2)}`);
                console.log(' ');
            }

            currentGrade = student.grade;
            studentsPassing = [];
            scores = [];

            if (student.score >= 3) {
                studentsPassing.push(student.name);
                scores.push(student.score);
            }
        }
    }

    if (studentsPassing.length > 0) {
        console.log(`${currentGrade + 1} Grade`);
        console.log(`List of students: ${studentsPassing.join(', ')}`);
        console.log(`Average annual score from last year: ${((scores.reduce((a, x) => a + x, 0)) / scores.length).toFixed(2)}`);
    }

}