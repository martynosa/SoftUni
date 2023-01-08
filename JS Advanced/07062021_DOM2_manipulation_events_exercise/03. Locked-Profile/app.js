function lockedProfile() {
    //select initial DOM elements
    let profiles = document.querySelectorAll('#main .profile');
    let buttons = document.querySelectorAll('#main .profile button');

    //attach listeners to buttons
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', () => {
            //get radio button status
            let radioButtonName = `user${index + 1}Locked`;
            let radioButton = document.querySelector(`input[name="${radioButtonName}"]:checked`);
            console.log(radioButton);

            //check if profile is locked/unlocked
            if (radioButton.value === 'unlock') {
                //get hidden field
                let hiddenFieldElement = document.getElementById(`user${index + 1}HiddenFields`)
                //toggle hidden field
                hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                    ? 'none'
                    : 'block';
                buttons[index].textContent = buttons[index].textContent === 'Show more'
                    ? 'Hide it'
                    : 'Show more';
            }
        });
    }


    console.log('TODO...')
}