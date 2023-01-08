function solve(input) {
    enMessage = input.shift();


    while ((line = input.shift()) !== `Decode`) {
        lineSplit = line.split(`|`);
        if (lineSplit[0] === `ChangeAll`) {
            for (const letter of enMessage) {
                if (letter === lineSplit[1]) {
                    enMessage = enMessage.replace(letter, lineSplit[2]);

                }
            }
        } else if (lineSplit[0] === `Insert`) {
            first = enMessage.substring(0, lineSplit[1]);
            last = enMessage.substring(lineSplit[1]);
            enMessage = first + lineSplit[2] + last;

        } else if (lineSplit[0] === `Move`) {
            first = enMessage.substr(0, lineSplit[1]);
            last = enMessage.substr(lineSplit[1]);
            enMessage = last + first;
        }
    }
    console.log(`The decrypted message is: ${enMessage}`);



}
solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
