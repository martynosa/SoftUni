function solution() {
    let AddButtonElement = document.querySelector('.container .card button');
    AddButtonElement.addEventListener('click', addButtonFunc);
    let giftNameInputElement = document.querySelector('.container .card input');



    function addButtonFunc() {
        //sort + append
        let liElement = document.createElement('li');
        liElement.textContent = giftNameInputElement.value;


        let listUlElement = document.querySelector('.container :nth-child(2) > ul');


        let listLIElement = Array.from(document.querySelectorAll('.container :nth-child(2) > ul li'));
        listLIElement.push(liElement);
        listLIElement.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(liEl => {
                liEl.classList.add('gift');

                //send button
                let sendButtElement = document.createElement('button');
                sendButtElement.setAttribute('id', 'sendButton');
                sendButtElement.textContent = 'Send';
                sendButtElement.addEventListener('click', sendFunc);


                //discard button
                let discardButtElement = document.createElement('button');
                discardButtElement.setAttribute('id', 'discardButton');
                discardButtElement.textContent = 'Discard'
                discardButtElement.addEventListener('click', discardFunc);


                function sendFunc() {
                    let sentGiftsUlElement = document.querySelector('.container :nth-child(3) > ul')

                    let sentGiftLiEl = document.createElement('li');
                    sentGiftLiEl.classList.add('gift');
                    sentGiftLiEl.textContent = liEl.textContent;

                    sentGiftsUlElement.appendChild(sentGiftLiEl);

                    liEl.remove();

                }





                function discardFunc() {
                    let discardGiftsUlElement = document.querySelector('.container :nth-child(4) > ul')

                    let discardGiftsLiElement = document.createElement('li');
                    discardGiftsLiElement.classList.add('gift');
                    discardGiftsLiElement.textContent = liEl.textContent;

                    discardGiftsUlElement.appendChild(discardGiftsLiElement);

                    liEl.remove();



                }



                //append
                liEl.appendChild(sendButtElement);
                liEl.appendChild(discardButtElement);
                listUlElement.appendChild(liEl);
            });



        giftNameInputElement.value = '';

    }




}