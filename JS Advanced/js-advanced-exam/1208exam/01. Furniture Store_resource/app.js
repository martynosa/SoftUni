window.addEventListener('load', solve);

function solve() {

    document.getElementById('add').addEventListener('click', addFurniture);


    function addFurniture(e) {
        e.preventDefault();

        let modelElement = document.getElementById('model');
        let model = modelElement.value;
        let yearElement = document.getElementById('year');
        let year = Number(yearElement.value);
        let descriptionElement = document.getElementById('description');
        let description = descriptionElement.value;
        let priceElement = document.getElementById('price');
        let price = Number(priceElement.value);


        if (model.trim() === ''
            || description.trim() === ''
            || year <= 0
            || price <= 0) {
            return;
        }

        //main table
        let furnitreTableEl = document.getElementById('furniture-list');

        //general info
        let trEl = document.createElement('tr');
        trEl.classList.add('info');

        let tdModelEl = document.createElement('td');
        tdModelEl.textContent = model;

        let tdPricelEl = document.createElement('td');
        tdPricelEl.textContent = price.toFixed(2);



        //buttons
        let tdButtonsEl = document.createElement('td');

        let infoButtonEl = document.createElement('button');
        infoButtonEl.classList.add('moreBtn');
        infoButtonEl.textContent = 'More Info';
        infoButtonEl.addEventListener('click', showMoreInfo);



        let buyButtonEl = document.createElement('button');
        buyButtonEl.classList.add('buyBtn')
        buyButtonEl.textContent = 'Buy it';
        buyButtonEl.addEventListener('click', buy);


        tdButtonsEl.appendChild(infoButtonEl);
        tdButtonsEl.appendChild(buyButtonEl);
        trEl.appendChild(tdModelEl);
        trEl.appendChild(tdPricelEl);
        trEl.appendChild(tdButtonsEl)



        let trMoreInfoEl = document.createElement('tr');
        trMoreInfoEl.classList.add('hide');

        let tdYearEl = document.createElement('td');
        tdYearEl.textContent = `Year: ${year}`;
        let tdDescritptionEl = document.createElement('td');
        tdDescritptionEl.setAttribute('colspan', '3')
        tdDescritptionEl.textContent = `Description: ${description}`;

        trMoreInfoEl.appendChild(tdYearEl);
        trMoreInfoEl.appendChild(tdDescritptionEl);

        furnitreTableEl.appendChild(trEl);
        furnitreTableEl.appendChild(trMoreInfoEl);


        modelElement.value = '';
        yearElement.value = null;
        descriptionElement.value = '';
        priceElement.value = null;


        function showMoreInfo() {

            if (infoButtonEl.textContent === 'More Info') {
                infoButtonEl.textContent = 'Less Info';
                trMoreInfoEl.style.display = 'contents';
            } else {
                infoButtonEl.textContent = 'More Info';
                trMoreInfoEl.style.display = 'none'
            }

        }


        function buy(e) {
            let target = e.target;
            let parentEl = target.parentElement.parentElement;
            let info = parentEl.nextSibling;

            let trArr = parentEl.querySelectorAll('td');
            let priceEl = trArr[1];
            let price = Number(priceEl.textContent);

            let totalPriceEl = document.querySelector('.total-price');
            let currentPrice = Number(totalPriceEl.textContent);
            totalPriceEl.textContent = currentPrice + price;
            parentEl.remove();
            info.remove();


        }

    }

}
