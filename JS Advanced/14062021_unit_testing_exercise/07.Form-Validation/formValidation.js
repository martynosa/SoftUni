function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateForm);
    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', isCompanyhandler);

    function validateForm(e) {
        e.preventDefault();

        //validate username
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid)

        //validate email
        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);


        //validate password
        let passwordRegex = /^\w{5,15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value)
        let passwordsMatch = passwordIsValid && confirmPasswordIsValid &&
            passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, passwordsMatch);
        setBorder(confirmPasswordInput, passwordsMatch)

        let companyNumberIsValid = false;
        let isCompanyCheckbox = document.getElementById('company');
        if (isCompanyCheckbox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            if (companyNumberInput.value.trim() !== ''
                && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }
            setBorder(companyNumberInput, companyNumberIsValid)
        }

        let validDiv = document.getElementById('valid');
        let mainInputsAreValid = usernameIsValid && emailIsValid && passwordsMatch
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDIv = mainInputsAreValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDIv ? 'block' : 'none'


    }

    function isCompanyhandler(e) {
        let companyInfoFieldSet = document.getElementById('companyInfo');
        companyInfoFieldSet.style.display = e.target.checked ? 'block' : 'none';
    }

    function setBorder(element, isValid) {
        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red')
        }
    }

}
