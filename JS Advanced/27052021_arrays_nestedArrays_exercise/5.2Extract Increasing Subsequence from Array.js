function solve(numArr) {

    let resultArr = numArr.reduce((acc, el) => {

        if (acc.length === 0 || el >= acc[acc.length - 1]) {
            acc.push(el)
        }

        return acc;
    }, [])

    return resultArr

}
console.log(solve(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
));