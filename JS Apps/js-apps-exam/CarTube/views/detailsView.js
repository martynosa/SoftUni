import { authServices } from "../authServices.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {
    let carId = ctx.params.carId;


    const buttonsForLoggedInUsers = (carId) => html`
    <div class="listings-buttons">
        <a href="/edit/${carId}" class="button-list">Edit</a>
        <a href="/delete/${carId}" class="button-list">Delete</a>
    </div>`;

    const detailsTemplate = (carInfo, isAuthenticated) => html`
        <section id="listing-details" data-set-ownerId="${carInfo._ownerId}" data-set-Id="${carInfo._id}">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${carInfo.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${carInfo.brand}</li>
                    <li><span>Model:</span>${carInfo.model}</li>
                    <li><span>Year:</span>${carInfo.year}</li>
                    <li><span>Price:</span>${carInfo.price}</li>
                </ul>
                <p class="description-para">${carInfo.descrition}</p>
                ${isOwner(carInfo) ? buttonsForLoggedInUsers(carInfo._id) : ''}
        
        </section>`;



    //acccess every car's id through the context
    let carInfo = await rServices.getSingleResource(carId);
    ctx.render(detailsTemplate(carInfo, authServices.isAuthenticated()));



    function isOwner(carInfo) {
        if (carInfo._ownerId === localStorage.getItem('id')) {
            return true;
        } else {
            return false;
        }
    }


}
