import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const createTemplate = () => html`
    <!-- Create Page ( Only for logged-in users ) -->
    <section id="create-page" class="create">
        <form id="create-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Add new Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" placeholder="Title">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type">
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Add Book">
            </fieldset>
        </form>
    </section>`;

    ctx.render(createTemplate());

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

        let createdBook = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            type: type,
        }

        await rServices.createResource(createdBook);
        ctx.page.redirect('/dashboard');
    }

}