function solve(num, ...commands) {
    num = Number(num);

    functions = {
        spice,
        fillet,
        bake,
        dice,
        chop
    }

    for (const command of commands) {
        if (command === 'spice') {

            functions[spice(num)]
        } else if (command === 'dice') {
            functions[dice(num)]
        } else if (command === 'bake') {
            functions[bake(num)];
        } else if (command === 'fillet') {
            functions[fillet(num)];
        } else if (command === 'chop') {
            functions[chop(num)]
        }

    }



    function spice(number) {
        num = number + 1;
        console.log(num);
    }

    function fillet(number) {
        num = number * 0.80;
        console.log(num);
    }

    function bake(number) {
        num = number * 3;
        console.log(num);
    }

    function dice(number) {
        num = Math.sqrt(number);
        console.log(num);
    }

    function chop(number) {
        num = number / 2;
        console.log(num);
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'
);