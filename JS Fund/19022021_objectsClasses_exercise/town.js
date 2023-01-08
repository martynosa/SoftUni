function solve(data) {

    for (const line of data) {
        let [town, latitude, longitude] = line.split(` | `); //взема първия елемент от масива и го сплитва по чертата
        latitude = Number(latitude).toFixed(2); //фиксирам до 2рото число след запетаята
        longitude = Number(longitude).toFixed(2);

        let obj = {
            town,
            latitude,
            longitude
        }
        console.log(obj)
    }

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);