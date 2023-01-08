function solve(input) {
    initialTargets = input.shift().split(` `).map(Number);

    for (let eachCommand of input) {
        eachCommandSplit = eachCommand.split(` `);
        command = eachCommandSplit[0];
        targetIndex = eachCommandSplit[1];
        targetPower = eachCommandSplit[2];

        if (command !== 'End') {
            if (command === `Shoot`) {                      //стрелям по таргета на индекса 
                initialTargets[targetIndex] -= targetPower; //със силата на TargetPower 
                if (initialTargets[targetIndex] <= 0) {     //и ако стане на 0 или по-малко я изтривам;
                    initialTargets.splice(targetIndex, 1);
                }

            } else if (command === `Add`) {                                     // добавяме targetPower на targetIndex
                if (targetIndex < initialTargets.length && targetIndex > 0) {   // ако индекса е валиден
                    initialTargets.splice(targetIndex, 1, targetPower);         //
                } else {
                    console.log(`Invalid placement!`);
                }

            } else if (command === `Strike`) {                                  //стреляме таргет на targetindex
                let start = targetIndex - targetPower;                          //Като трием елементите отпред и отзад на индекса
                let end = targetPower * 2 + 1;                                  //със стойноста в радиус

                if (start > -1 && end < initialTargets.length) {
                    initialTargets.splice(start, end);
                } else {
                    console.log('Strike missed!');
                }

            }
        }








    }
    console.log(initialTargets.join(`|`));
}
solve([`1 2 3 4 5`,
    `Strike 0 1`,
    `End`
]);