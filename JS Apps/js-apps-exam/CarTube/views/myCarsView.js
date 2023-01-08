import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";

export default async function (ctx) {

    const singeCarTemplate = (carInfo) => html`
    <div class="listing" data-set-ownerId="${carInfo._ownerId}" data-set-Id="${carInfo._id}">
        <div class=" preview">
            <img src="${carInfo.imageUrl}">
        </div>
        <h2>${carInfo.brand} ${carInfo.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${carInfo.year}</h3>
                <h3>Price: ${carInfo.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${carInfo._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>`

    const myCarsTemplate = (carsArr) => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                <!-- Display all records -->
                ${carsArr.map(c => singeCarTemplate(c))}
            </div>
        </section>`;

    const myCarsEmptyTemplate = () => html`
        <section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                <!-- Display if there are no records -->
                <p class="no-cars"> You haven't listed any cars yet.</p>
            </div>
        </section>`;

    let carsArr = await rServices.getUserResources(localStorage.getItem('id'));

    if (carsArr.length == 0) {
        return ctx.render(myCarsEmptyTemplate());
    }
    return ctx.render(myCarsTemplate(carsArr));

}