function solve(numArr) {

    let resultArr = aggregate(numArr, reducer, [])

    function reducer(acc, el) {
        if (acc.length === 0 || acc[acc.length - 1] < el) {
            acc.push(el);
        }
        return acc;
    }


    function aggregate(arr, reducerFunc, initialValue) {
        for (let index = 0; index < arr.length; index++) {
            const el = arr[index];
            initialValue = reducerFunc(initialValue, el);

        }
        return initialValue;
    }
    return resultArr;

    


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