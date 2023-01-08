

function solve(arr) {
    let sequance = [];

    for (i = 0; i < arr.length; i++) {
        const element = arr[i];
        let currSequance = [element];
        for (let j = i + 1; j < arr.length; j++) {

            if (element === arr[j]) {
                currSequance.push(element);
            } else {
                break;
            }
        }

        if (sequance.length < currSequance.length) {
            sequance = currSequance;
        }

    }

    console.log(sequance.join(' '));

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);