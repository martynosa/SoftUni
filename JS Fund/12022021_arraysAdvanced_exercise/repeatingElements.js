function elements(arr) {
    let distinct = [];

    for (const n of arr) {
        if (!distinct.includes(n)) {
            distinct.push(n);
        }
    }
    let result =  distinct.join(' ');
    console.log(result);


}
elements([7, 8, 9, 7, 2, 3, 4, 1, 2]);