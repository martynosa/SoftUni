function solve(input) {
    let firstEmployeeEff = Number(input[0]);
    let secondEmployeeEff = Number(input[1]);
    let thirdEmployeeEff = Number(input[2]);
    let totalstudents = Number(input[3]);

    let studentsPerHour = firstEmployeeEff + secondEmployeeEff + thirdEmployeeEff;
    let answeredStudents = 0;
    let hours = 0;

    while (answeredStudents < totalstudents) {

        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue; // връща се в условието на while
        }

        answeredStudents += studentsPerHour;
        hours++;
    }

    if (hours % 4 === 0 && hours !== 0) {
        hours++;
    }



    console.log(`Time needed: ${hours}h.`);
}
solve(['5', '6', '4', '20']);