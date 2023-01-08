function solve() {

    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreenHandler);

    // > direct child under #archive
    let clearArchiveButton = document.querySelector('#archive > button');
    clearArchiveButton.addEventListener('click', clearArchive)


    //adding a movie
    function onScreenHandler(e) {
        //preventDefaul() so that the form does not refresh the page and lose all the data
        e.preventDefault();


        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;


        //Check input values
        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {

            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = Number(price).toFixed(2);

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveButton);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);

            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);

            //clear inputs
            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }

    }

    //archiving a movie
    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold.trim() !== '' &&
            !isNaN(Number(ticketsSold))) {

            ticketsSold = Number(ticketsSold);
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);

            let hallStrong = movieLi.querySelector('strong');
            totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            movieLi.appendChild(deleteButton);
            deleteButton.addEventListener('click', deleteFromArchive);



            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);

        }
    }
    //deleting a movie from the Archive
    function deleteFromArchive(e) {
        let currentElement = e.target;
        let movieLi = currentElement.parentElement;

        movieLi.remove();

    }
    //deleting everything from the Archive
    function clearArchive() {
        let archiveLi = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLi.forEach(x => {
            x.remove();
        })

    }



}