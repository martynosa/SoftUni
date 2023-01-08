import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const editTemplate = (book) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
        <form id="edit-form" action="#" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" value=${book.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description">${book.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value=${book.type}>
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>`;

    let book = await rServices.getSingleResource(ctx.params.id);
    ctx.render(editTemplate(book));

    async function onSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        if (title.trim() === '' ||
            description.trim() === '' ||
            imageUrl.trim() === '' ||
            type == null) {
            return window.alert('All fields must be filled in!')
        }

        let editedBook = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            type: type,
        }

        await rServices.editResource(book._id, editedBook)
        ctx.page.redirect(`/details/${book._id}`);
    }

}