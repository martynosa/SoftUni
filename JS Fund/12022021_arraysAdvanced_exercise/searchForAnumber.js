function search(arr, commands) {
    let [count, deleteCount, num] = commands;

    let slicedElements = arr.slice(0, count);
    slicedElements.splice(0, deleteCount);

    let filteredNum = slicedElements.filter(x => x === num);

    return `Number ${num} occurs ${filteredNum.length} times.`



}
console.log(search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]));