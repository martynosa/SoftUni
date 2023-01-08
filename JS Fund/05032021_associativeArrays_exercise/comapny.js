function solve(array) {
    let employees = {};

    for (let element of array) {
        let [company, id] = element.split(' -> ');
        let arrOfId = id.split(' ');
        if (!employees.hasOwnProperty(company)) {
            employees[company] = arrOfId;
        } else {
            for (let identificator of arrOfId) {
                employees[company].push(identificator);
            }
        }
    }

    let entries = Object.entries(employees);

    for (let [companyName, employeeId] of entries) {
        uniq = [...new Set(employeeId)];
        employees[companyName] = uniq;
    }

    let result = Object.entries(employees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, idCompany] of result) {
        console.log(name)
        idCompany.forEach(el => console.log('--', el))
    }
    
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);