import { html } from "../node_modules/lit-html/lit-html.js";

import { rServices } from '../rServices.js'


export default function (ctx) {

    const createTemplate = () => html`
    <section id="create-listing">
        <div class="container">
            <form id="create-form" @submit=${onSubmit}>
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>`;

    ctx.render(createTemplate(onSubmit));


    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let carBrand = formData.get('brand');
        let carModel = formData.get('model');
        let carDescription = formData.get('description');
        let carYear = formData.get('year');
        let carImageUrl = formData.get('imageUrl');
        let carPrice = formData.get('price');

        if (carBrand.trim() === '' ||
            carModel.trim() === '' ||
            carDescription.trim() === '' ||
            carYear.trim() === '' ||
            carImageUrl.trim() === '' ||
            carPrice.trim() === '') {
            return window.alert('something is wrong')
        }

        let createdCar = {
            brand: carBrand,
            model: carModel,
            description: carDescription,
            year: Number(carYear),
            imageUrl: carImageUrl,
            price: Number(carPrice),
        }

        await rServices.createResource(createdCar);
        ctx.page.redirect('/allListings')
    }


}