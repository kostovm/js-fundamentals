// Initial solution

function meetings(input) {
    let scheduledMeetings = {};

    for (let line of input) {
        let day = line.split(" ")[0];
        let name = line.split(" ")[1];
        if (scheduledMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduledMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    let meetingDays = Object.keys(scheduledMeetings);
    for (let day of meetingDays) {
        console.log(`${day} -> ${scheduledMeetings[day]}`)
    }
}

// Solution after revisiting the task

function meetings(input) {

    let schedule = {};

    for (let entry of input) {
        let [day, name] = entry.split(' ');
        schedule.hasOwnProperty(day) ? console.log(`Conflict on ${day}!`) : (schedule[day] = name, console.log(`Scheduled for ${day}`))
    }

    for (let key in schedule) {
        console.log(key + ' -> ' + schedule[key]);
    }

}