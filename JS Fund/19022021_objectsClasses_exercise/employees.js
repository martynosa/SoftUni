function solve(data) {

    for (const str of data) {

        let obj = {
            name: str,
            id: str.length
        }

        console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`)
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);