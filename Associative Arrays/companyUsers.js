function companyUsers(input) {

    let companyInfo = {};

    for (let line of input) {
        currentInfo = line.split(" -> ");
        let companyName = currentInfo[0];
        let employeeId = currentInfo[1];

        if (!companyInfo.hasOwnProperty(companyName)) {
            companyInfo[companyName] = new Set();
            companyInfo[companyName].add(employeeId);
        } else {
            companyInfo[companyName].add(employeeId);
        }
    }

    let sortedCompanies = Object.keys(companyInfo).sort((a, b) => a.localeCompare(b));

    for (let company of sortedCompanies) {
        console.log(company);
        let employeeIds = Array.from(companyInfo[company]);
        for (let id of employeeIds) {
            console.log(`-- ${id}`);
        }
    }

}