function division(a, b) {
    if (b == 0) {
        throw new RangeError('Division with zero!');
        // throw {
        //     message: 'Division with zero!',
        //     firstNumber: a,
        // };
    }

    return a / b;
}
try {
    console.log(division(10, 2));
    console.log(division(10, 0));
} catch (error) {
    // Handling an error
    console.log('Error handled!');
    // console.log(error);
} finally {
    console.log('This will always execute');
}

console.log('finish');