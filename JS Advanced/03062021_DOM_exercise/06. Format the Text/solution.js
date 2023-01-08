function solve() {

  let inputValue = document.querySelector('#input').value;
  let inputArr = inputValue.split('.').filter(Boolean);

  let outputElement = document.getElementById('output');


  for (i = 0; i < inputArr.length; i + 3) {
    let firstP = inputArr.splice(0, 3).map((x) => x + '.').join('');


    let pElement = document.createElement('p')
    pElement.textContent = firstP;
    console.log(pElement.textContent);
    outputElement.appendChild(pElement);

  }


}