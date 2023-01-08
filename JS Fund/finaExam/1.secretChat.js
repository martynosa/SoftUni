function solve(input) {
    //input management
    let message = input.shift();
    let line = input.shift(); //командата



    while (line !== `Reveal`) {     //въртим цикъла докато се 
        //подаде командата reveal
        //switch commands
        let [command, firstArg, secondArg] = line.split(`:|:`);
        hasError = false;

        switch (command) {

            case `InsertSpace`:
                let index = Number(firstArg);
                //добавяме празно място на дадени index в командата
                //като разделяме стринга добавяме го и го долепяме
                message = message.substring(0, index) + ` ` + message.substring(index);
                break;

            case `Reverse`:
                if (message.includes(firstArg)) {
                    //replace първия срещнат аргумен с нищо
                    message = message.replace(firstArg, ``);
                    //reverse
                    let reversedSubstring = firstArg.split(``).reverse().join(``);
                    //add to end
                    message += reversedSubstring;

                } else {
                    console.log(`error`);
                    hasError = true;
                }
                break;

            case `ChangeAll`:

                while (message.includes(firstArg)) {
                    message = message.replace(firstArg, secondArg)
                }

                break;

        }

        if (!hasError) {
            console.log(message);
        }

        line = input.shift();
    }

    //prints
    console.log(`You have a new text message: ${message} `);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);