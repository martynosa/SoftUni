function solve() {

  // Select elements
  let textElement = document.querySelector('#text');
  let namingConventionElement = document.querySelector('#naming-convention');

  //parse data
  let text = textElement.value;
  let namingConvention = namingConventionElement.value;

  //main logic
  let result = applyNamingConvention(text, namingConvention);

  //display
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;



  //logic
  function applyNamingConvention(text, convention) {
    const conventionSwitch = {
      'Pascal Case': () => text
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => text
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    };

    return (conventionSwitch[convention] || conventionSwitch.default)();

  }
}