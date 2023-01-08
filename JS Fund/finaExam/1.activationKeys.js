function activationKeys(input) {

    let rawKey = input.shift();

    for (const line of input) {

        if (line === `Generate`) {
            console.log(`Your activation key is: ${rawKey}`);
            break;
        }

        let [comm, x, y, z] = line.split(`>>>`);

        if (comm === `Contains`) {
            if (rawKey.includes(x)) {
                console.log(`${rawKey} contains ${x}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (comm === `Flip`) {
            y = Number(y);
            z = Number(z);

            let substr = rawKey.substring(y, z);

            if (x === `Upper`) {
                substr = substr.toUpperCase();
            } else {
                substr = substr.toLowerCase();
            }

            rawKey = rawKey.substring(0, y) + substr + rawKey.substring(z);
            console.log(rawKey);
        } else if (comm = `Slice`) {
            x = Number(x);
            y = Number(y);

            rawKey = rawKey.substring(0, x) + rawKey.substring(y);
            console.log(rawKey);
        }




    }





}


activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])