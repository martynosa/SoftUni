import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from '../rServices.js'


export default function (ctx) {

    const carCardTemplate = (car) => html`
    <div class="listing">
        <div class="preview" data-set-ownerId="${car._ownerId}" data-set-Id="${car._id}">
            <img src="${car.imageUrl}">
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>${car.year}</h3>
                <h3>${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`;

    const allListingsTemplate = (cars) => html`
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                <!-- Display all records -->
                ${cars.map(c => carCardTemplate(c))}
        
            </div>
        </section>`;

    const noCarsTemplate = () => html`
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                <!-- Display if there are no records -->
                <p class="no-cars">No cars in database.</p>
            </div>
        </section>`;


    rServices.getAllResources().then(cars => {
        if (cars.length == 0) {
            return ctx.render(noCarsTemplate());
        }
        return ctx.render(allListingsTemplate(cars));
    });

}