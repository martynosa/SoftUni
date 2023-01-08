import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";



export default async function (ctx) {

    const searchTemplate = (filteredCars) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>
            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button id="searchBtn" class="button-list">Search</button>
            </div>
        
            <h2>Results:</h2>
            <div class="listings">
                ${filteredCars.map(car => carTemplate(car))}
            </div>
        </section>`;

    const searchTemplateEmpty = () => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button id="searchBtn" class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="listings">
            <p class="no-cars"> No results.</p>
        </div>
    </section>`;

    let carTemplate = (car) => html`
            <div class="listing">
                <div class="preview">
                    <img src=${car.imageUrl}>
                </div>
                <h2>${car.brand} ${car.model}</h2>
                <div class="info">
                    <div class="data-info">
                        <h3>Year: ${car.year}</h3>
                        <h3>Price: ${car.price} $</h3>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${car._id}" class="button-carDetails">Details</a>
                    </div>
                </div>
            </div>`;

    ctx.render(searchTemplateEmpty());

    let searchBtnElement = document.getElementById('searchBtn');
    searchBtnElement.addEventListener('click', search);

    async function search() {

        let searchInputElement = document.getElementById(`search-input`);
        let searchInput = searchInputElement.value;

        //local search
        // let carsArr = await rServices.getAllResources();
        // let filteredCars = carsArr.filter(c => c.year == searchInput);
        // ctx.render(searchTemplate(filteredCars));

        let filteredCars = await rServices.search(searchInput);
        console.log(filteredCars);

        if (filteredCars.length > 0) {
            return ctx.render(searchTemplate(filteredCars));
        }
        ctx.render(searchTemplateEmpty());

    }

}