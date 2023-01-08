import { html } from "../node_modules/lit-html/lit-html.js"
import { rServices } from "../rServices.js";

export default async function (ctx) {



    const createTemplate = (onSubmit) => html`
        <!-- Create Meme Page ( Only for logged users ) -->
        <section id="create-meme">
            <form id="create-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>`;

    ctx.render(createTemplate(onSubmit));


    async function onSubmit(e) {
        e.preventDefault();

        let form = new FormData(e.target);

        let title = form.get('title');
        let description = form.get('description');
        let imageUrl = form.get('imageUrl');

        let memeObj = {
            title,
            description,
            imageUrl
        };

        //empty fields validation
        if (title.trim() === ''
            || description.trim() === ''
            || imageUrl.trim() === '') {
            return window.alert('Please fill in everything');
        }

        await rServices.createResource(memeObj);
        ctx.page.redirect('/allMemes');

    }

}