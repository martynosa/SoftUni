import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";

export default async function (ctx) {

    const editTemplate = (carInfo, onSubmit) => html`
    <section id="edit-listing">
        <div class="container">
            <form id="edit-form" @submit=${onSubmit}>
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value=${carInfo.brand}>
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value=${carInfo.model}>
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value=${carInfo.description}>
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value=${carInfo.year}>
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${carInfo.imageUrl}>
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value=${carInfo.price}>
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>`;

    let carInfo = await rServices.getSingleResource(ctx.params.id);
    ctx.render(editTemplate(carInfo, onSubmit));

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

        await rServices.editResource(carInfo._id, createdCar);
        ctx.page.redirect(`/details/${carInfo._id}`);
    }

}