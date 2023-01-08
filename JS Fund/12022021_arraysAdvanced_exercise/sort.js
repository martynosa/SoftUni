function sort(arr) {

    arr = arr.sort((a, b) => b - a);
    let sortedSmallhigh = [];
    let arrCopy = arr.slice(0);

    for (i = 0; i <arrCopy.length; i++) {
        let n;
        if (i % 2=== 0) {
            n = arr.shift();
        } else {
            n = arr.pop();
        }
        sortedSmallhigh.push(n);
    }




    console.log(sortedSmallhigh.join(' '));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);