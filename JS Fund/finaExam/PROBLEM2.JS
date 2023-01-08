function solve(input) {
    input.shift();
    let regex = /!([A-Z][a-z]+)!:\[([A-Za-z]{8,})\]/g;



    for (const line of input) {
        let matches = regex.exec(line);

        decriptedMessage = [];


        if (matches === null) {
            console.log(`The message is invalid`);
        } else {
            let comm = matches[1];

            for (const char of matches[2]) {
                let code = char.charCodeAt();
                decriptedMessage.push(code);

            }
            console.log(`${comm}: ${decriptedMessage.join(` `)}`);
        }



    }





}
solve((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]));