function addItem() {

    //select elements
    let newTextElement = document.getElementById('newItemText');
    let newValueElement = document.getElementById('newItemValue');
    let newText = newTextElement.value;
    let newValue = newValueElement.value;

    let menuElement = document.getElementById('menu')

    //create element
    let newMenuElement = document.createElement('option');
    newMenuElement.textContent = newText;
    newMenuElement.value = newValue;
    menuElement.appendChild(newMenuElement);

    //clear fields
    newTextElement.value = '';
    newValueElement.value = '';

    console.log(newMenuElement.value);

    console.log('TODO:...');
}