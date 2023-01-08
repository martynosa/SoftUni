function trains(arr) {
    let wagons = arr.shift().split(' ').map(Number);//шифт изрязва първия елемент от масива
    let capacity = Number(arr.shift());

    for (const line of arr) {
        let [comm, n] = line.split(' ');
        if (comm === 'Add') {
            wagons.push(Number(n));
        } else {
            let passengers = Number(comm);
            for (i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= capacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }

    let result = wagons.join(' ');
    console.log(result);

}

trains(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
