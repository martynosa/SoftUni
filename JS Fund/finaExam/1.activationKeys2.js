function solve(input) {
    let actions = {
        Contains(rawKey, pattern) {
            if (rawKey.includes(pattern)) {
                console.log(`${rawKey} contains ${pattern}`);
            } else {
                console.log(`Substring not found!`);
            }
            return rawKey;
        },
        Flip(rawKey, mode, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);

            if (mode === `Upper`) {
                second = second.toUpperCase();
            } else {
                second = second.toLowerCase();
            }

            let result = first + second + third;

            console.log(result);
            return result;
        },
        Slice(rawKey, start, end) {
            [start, end] = [Number(start), Number(end)];
            let first = rawKey.substring(0, start);
            let second = rawKey.substring(start, end);
            let third = rawKey.substring(end);

            let result = first + third;

            console.log(result);
            return result;

        }
    }
    let rawKey = input.shift();
    //докато входа е различен от generate ще извършваме нещо
    let line;
    while ((line = input.shift()) !== `Generate`) {
        let [actionName, ...params] = line.split(`>>>`);
        rawKey = actions[actionName](rawKey, ...params);
    }
    //
    console.log(`Your activation key is: ` + rawKey);

}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])