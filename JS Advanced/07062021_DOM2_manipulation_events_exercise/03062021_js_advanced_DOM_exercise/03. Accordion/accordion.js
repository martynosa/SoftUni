function toggle() {

    let button = document.getElementsByClassName('button')[0];
    let status = document.getElementById('extra');

    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
        status.style.display = 'block'
    } else {
        button.innerHTML = 'More'
        status.style.display = 'none'
    }

    console.log(button);
}