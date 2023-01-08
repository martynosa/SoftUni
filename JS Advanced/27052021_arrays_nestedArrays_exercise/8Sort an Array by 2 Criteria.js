function solve(arr) {

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }

    return arr.sort(twoCriteriaSort).join('\n');

}
console.log(solve(['alpha',
    'beta',
    'gamma']));