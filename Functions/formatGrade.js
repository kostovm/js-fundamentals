function formatGrade(grade) {

    let output;

    if (grade >= 5.5) {
        output = 'Excellent';
    } else if (grade >= 4.5) {
        output = 'Very good';
    } else if (grade >= 3.5) {
        output = 'Good';
    } else if (grade >= 3) {
        output = 'Poor';
    } else {
        return console.log('Fail (2)');
    }

    console.log(`${output} (${grade.toFixed(2)})`);

}