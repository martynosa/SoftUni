
function solve(input, comm) {

    actions = {
        multiply(numbers) {
            return input.reduce((a, b) => a * b);
        },
        subtract(numbers) {
            return input.reduce((a, b) => a - b);
        },
        add(numbers) {
            return input.reduce((a, b) => a + b);
        }

    }

    console.log(actions[comm](input));

}


solve([3, 5, 7, 5, 5, 5], `multiply`);