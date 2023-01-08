function solve(input) {
    input.pop();
    initialArr = input.shift(); //.map(Number);

    for (let eachCommand of input) {
        eachCommandSplit = eachCommand.split(` `);
        let command = eachCommandSplit[0];

        if (command === `end`) {

        } else if (command === `reverse`) {
            let from = eachCommandSplit[2];
            let count = eachCommandSplit[4];
            let arrPortion = initialArr.splice(from, count).reverse();
            initialArr.splice(from, 0, ...arrPortion);


            console.log(initialArr.join(`, `));



        } else if (command === `sort`) {
            let from = eachCommandSplit[2];
            let count = eachCommandSplit[4];
            let sortedPortion = initialArr.splice(from, count).sort();//.sort((a, b) => a - b)
            initialArr.splice(from, 0, ...sortedPortion);
            console.log(initialArr.join(`, `));

        } else if (command === `remove`) {
            let removedFrom = eachCommandSplit[1];
            let removedArr = initialArr.splice(0, removedFrom);
            console.log(initialArr.join(`, `));
        }

    }

}
solve([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
    "remove 2",
    "end"])