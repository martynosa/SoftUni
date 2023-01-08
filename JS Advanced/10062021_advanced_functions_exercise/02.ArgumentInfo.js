function solve(...params) {


    let occurances = {};
    //array to hold the result
    let result = [];

    //get param type
    params.forEach(el => {
        //get param type
        let type = typeof (el);
        result.push(`${type}: ${el}`);

        //increase type count in occurances obj
        if (occurances[type] !== undefined) {
            occurances[type]++;
        } else {
            occurances[type] = 1;
        }

    });

    //get occurance key ('string', number ...)
    let sortedKeys = Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a]);

    sortedKeys.forEach(key => result.push(`${key} = ${occurances[key]}`));

    result.forEach(el => {
        console.log(el);
    })

}
solve('cat', 42, function () { console.log('Hello world!'); });