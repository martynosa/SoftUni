window.addEventListener('load', solution);

function solution() {
  let submitButtElement = document.querySelector('#submitBTN');
  submitButtElement.addEventListener('click', submitFunc);

  function submitFunc() {

    let fNameElement = document.querySelector('#fname');
    let emailElement = document.querySelector('#email');
    let phoneElement = document.querySelector('#phone');
    let addressElement = document.querySelector('#address');
    let codeElement = document.querySelector('#code');



    if (fNameElement.value != '' && emailElement.value != '') {

      let previewSectionElement = document.querySelector('#infoPreview');

      let fNameLiElement = document.createElement('li');
      fNameLiElement.textContent = `Full Name: ${fNameElement.value}`;
      let onlyFNameValue = fNameElement.value;

      let emailLiElement = document.createElement('li');
      emailLiElement.textContent = `Email: ${emailElement.value}`;
      let onlyEmailValue = emailElement.value;

      let phoneLiElement = document.createElement('li');
      phoneLiElement.textContent = `Phone Number: ${phoneElement.value}`;
      let onlyPhoneValue = phoneElement.value;

      let addressLiElement = document.createElement('li');
      addressLiElement.textContent = `Address: ${addressElement.value}`;
      let onlyAddressValue = addressElement.value

      let codeLiElement = document.createElement('li');
      codeLiElement.textContent = `Postal Code: ${codeElement.value}`;
      let onlyCodeValue = codeElement.value;


      //appending
      previewSectionElement.appendChild(fNameLiElement);
      previewSectionElement.appendChild(emailLiElement);
      previewSectionElement.appendChild(phoneLiElement);
      previewSectionElement.appendChild(addressLiElement);
      previewSectionElement.appendChild(codeLiElement);


      //clear inputs
      fNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = null;
      addressElement.value = '';
      codeElement.value = null;

      //disable submitButtElement
      submitButtElement.disabled = true;
      //enable editButtElement
      let editButtElement = document.querySelector('#editBTN');
      editButtElement.disabled = false;
      editButtElement.addEventListener('click', editFunc);

      let continueButtElement = document.querySelector('#continueBTN')
      continueButtElement.disabled = false;
      continueButtElement.addEventListener('click', continueFunc)





      function editFunc() {

        //returning values to submit
        fNameElement.value = onlyFNameValue;
        emailElement.value = onlyEmailValue;
        phoneElement.value = onlyPhoneValue;
        addressElement.value = onlyAddressValue;
        codeElement.value = `${onlyCodeValue}`;

        //deleting values from preview
        let InfoDelLIElements = Array.from(document.querySelectorAll(`#infoPreview li`));
        InfoDelLIElements.forEach(liEl => liEl.remove());

        //enable submitButtElement
        submitButtElement.disabled = false;
        editButtElement.disabled = true;
        continueButtElement.disabled = true;
        // console.log(codeElement.value);

      }




    }





    return;
  }
  function continueFunc() {

    let IdBlock = document.querySelector('#block');

    let h1Children = Array.from(IdBlock.querySelectorAll('h1'));

    h1Children.forEach(child => child.remove());


    let h4Children = Array.from(IdBlock.querySelectorAll('h4'));

    h4Children.forEach(child => child.remove());

    let divChildren = Array.from(IdBlock.querySelectorAll('div'));

    divChildren.forEach(child => child.remove());

    let footerChildren = Array.from(IdBlock.querySelectorAll('footer'));
    footerChildren.forEach(child => child.remove());

    let h3TagElement = document.createElement('h3');
    h3TagElement.textContent = "Thank you for your reservation!";
    IdBlock.appendChild(h3TagElement);

  }


}
