
function bonusSystem(input) {
    // извличаме първите 3 аргумента от масива и го записваме в променливите
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    let students = input;
    let maxAttendances = 0;

    for (i = 0; i < studentsCount; i++) { //цикъл, който обикаля през остатъка от масива и проверява дали аргумента е с по-висока стойност от maxAttendances и ако е я презаписва; 
        let currentAttendance = Number(students[i]); //превърщаме аргумента от масива от стринг в число и го запазваме в нова променлива
        if (currentAttendance > maxAttendances) {
            maxAttendances = currentAttendance;
        }

    }
    //пресмятаме бонуса по форумата от задачата и го принитраме
    let maxBonus = 0; //така избяваме възможноста от 0/0 = NaN
    if ( lecturesCount > 0){
        maxBonus = maxAttendances / lecturesCount *(5 + initialBonus);
    }

    
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`); //закръгляме го нагоре
    console.log(`The student has attended ${maxAttendances} lectures.`);



}
bonusSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);