function solve() {
  let input = document.getElementById('input').value.split('.').filter(Boolean);
  let output = document.getElementById('output');
  let rowCount = 0;
  let formattedText = '';
  for (let i = 0; i < input.length; i++) {
    if (rowCount == 0) {
      formattedText += '<p>';
    }
    formattedText += input[i] + '.';
    rowCount++;

    if (rowCount == 3 || i == input.length - 1) {
      formattedText += '</p> \n';
      rowCount = 0;
    }
  }
  output.innerHTML += formattedText;
}