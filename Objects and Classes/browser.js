function browser(obj, arr) {

    for (let command of arr) {

        if (command.includes('Open')) {
            let website = command.split('Open ')[1];
            obj['Open Tabs'].push(website)
            obj['Browser Logs'].push(command);
        } else if (command.includes('Close')) {
            let website = command.split('Close ')[1];
            if (obj['Open Tabs'].includes(website)) {
                let index = obj['Open Tabs'].indexOf(website);
                obj['Open Tabs'].splice(index, 1);
                obj['Recently Closed'].push(website);
                obj['Browser Logs'].push(command);
            }
        } else if (command.includes('Clear')) {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);

}