import { html } from "../node_modules/lit-html/lit-html.js"
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const editTemplate = (meme, onSubmit) => html`
            <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
            <section id="edit-meme">
                <form id="edit-form" @submit=${onSubmit}>
                    <h1>Edit Meme</h1>
                    <div class="container">
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                        <label for="description">Description</label>
                        <textarea id="description" placeholder="Enter Description" name="description"
                            .value=${meme.description}></textarea>
                        <label for="imageUrl">Image Url</label>
                        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                            .value="${meme.imageUrl}">
                        <input type="submit" class="registerbtn button" value="Edit Meme">
                    </div>
                </form>
            </section>`;

    let meme = await rServices.getSingleResource(ctx.params.id);

    ctx.render(editTemplate(meme, onSubmit));

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

        await rServices.editResource(meme._id, memeObj);
        ctx.page.redirect('/allMemes');

    }

}