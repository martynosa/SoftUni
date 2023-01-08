function passwordReset(input) {

    let password = input.shift();

    input.forEach(line => {

        if (line !== `Done`) {

            let [command, ...tokens] = line.split(` `);
            if (command === `TakeOdd`) {

                password = [...password]
                    .filter((s, i) => i % 2 !== 0)
                    .join(``);
                console.log(password);

            } else if (command === `Cut`) {

                let index = Number(tokens[0]);
                let length = Number(tokens[1]);

                let substring = password.substring(index, index + length);
                password = password.replace(substring, ``)
                console.log(password);

            } else if (command === `Substitute`) {

                let [substring, substitute] = tokens;

                if (password.includes(substring)) {
                    password = password.replace(new RegExp(`${substring}`, 'g'), substitute);
                    console.log(password);
                } else {
                    console.log(`Nothing to replace!`);
                }

            }


        }

    })
    console.log(`Your password is: ${password}`);
}
passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);