function subSum(numbers, startIndex, endIndex) {
    let result = numbers
        .slice(startIndex, endIndex)
        .reduce((a, x) => a + x, 0);

    return result;
}

function test1_subSum() {
    // Arange
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    let expectedResult = 150;

    // Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualResult === expectedResult) {
        console.log('Test 1 is passsing')
    } else {
        console.error('Test 1 failed');
    }
}

function test2_subSum() {
    // Arange
    let numbers = [1.1, 2.2, 3.3, 4.4, 5.5];
    let startIndex = -3;
    let endIndex = 1;
    let expectedResult = 3.3;

    // Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    // Assert
    if (actualResult === expectedResult) {
        console.log('Test 1 is passsing')
    } else {
        console.error('Test 1 failed');
    }
}

test1_subSum();
test2_subSum();