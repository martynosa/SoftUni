function solve(input) {
    username = input.shift();


    while ((line = input.shift()) !== `Sign up`) {
        lineSplit = line.split(` `);
        comm = lineSplit[0];

        if (comm === `Case`) {
            if (lineSplit[1] === `lower`) {
                username = username.toLowerCase();
            } else {
                username = username.toUpperCase();
            }
            console.log(username);

        } else if (comm === `Reverse`) {

            let startInd = Number(lineSplit[1]);
            let endInd = Number(lineSplit[2]);

            if (!isNaN(startInd) && !isNaN(endInd)) {
                middle = username.substring(startInd, endInd + 1);

                reversed = middle.split(``).reverse().join(``);
                console.log(reversed);
            }



        } else if (comm === `Cut`) {
            let index = username.indexOf(lineSplit[1]);

            if (index !== -1) {
                username = username.split(``);
                sliced = username.splice(index, lineSplit[1].length);
                username = username.join(``);
                console.log(username);


            } else {
                console.log(`The word ${username} doesn't contain ${lineSplit[1]}.`);
            }


        } else if (comm === `Replace`) {
            while (username.includes(lineSplit[1])) {
                username = username.replace(lineSplit[1], `*`);

            }
            console.log(username);

        } else if (comm === `Check`) {
            if (username.includes(lineSplit[1])) {
                console.log(`Valid`);
            } else {
                console.log(`Your username must contain ${lineSplit[1]}.`);
            }

        }



    }




}



solve(["ThisIsMyString",
    "Reverse 1 j",
    "Replace i",
    "Cut My",
    "Sign up"]);


console.log(`------------------------------`);

solve(["Peter",
    "Case lower",
    "Cut ES",
    "Check @",
    "Sign up"]);