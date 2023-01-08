function subtract() {
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;

    let result = Number(firstNumber) - Number(secondNumber);

    let finalResult = document.getElementById('result');
    finalResult.innerHTML = result;
    return finalResult




    console.log(finalResult);
}
