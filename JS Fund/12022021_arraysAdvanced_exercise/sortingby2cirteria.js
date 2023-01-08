function sort(input) {

    input.sort(customSort);

    function customSort(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }

    console.log(input.join('\n'));





}
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);