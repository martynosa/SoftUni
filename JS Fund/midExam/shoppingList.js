function solve(input) {
    input.pop();
    initialList = input.shift().split(`!`);


    //команди
    for (let eachCommand of input) {
        commandSplit = eachCommand.split(` `);
        command = commandSplit[0];
        product = commandSplit[1];
        NewProductName = commandSplit[2];


        if (command === `Urgent`) {                 //добавям отпред
            if (!initialList.includes(product)) {
                initialList.unshift(product);
            }

        } else if (command === `Unnecessary`) {     //трия
            for (i = 0; i < initialList.length; i++) {
                if (initialList[i] === product) {
                    initialList.splice(i, 1);
                }
            }

        } else if (command === `Correct`) {             // променя името на продукта
            for (i = 0; i < initialList.length; i++) {
                if (initialList[i] === product) {
                    initialList.splice(i, 1, NewProductName);
                }
            }

        } else if (command === `Rearrange`) {
            for (i = 0; i < initialList.length; i++) {  //трия го и го добавям в началото
                if (initialList[i] === product) {
                    initialList.splice(i, 1);
                    initialList.push(product);
                }
            }

        }

    }





    console.log(initialList.join(`, `));
}
solve([`Milk!Pepper!Salt!Water!Banana`,
    `Urgent Salt`,
    `Unnecessary Grapes`,
    `Correct Pepper Onion`,
    `Rearrange Grapes`,
    `Correct Tomatoes Potatoes`,
    `Urgent TP`,
    `Unnecessary Banana`,
    `Go Shopping!`]);