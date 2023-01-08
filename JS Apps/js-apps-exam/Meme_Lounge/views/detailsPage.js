import { html } from "../node_modules/lit-html/lit-html.js"
import { rServices } from "../rServices.js";


export default async function (ctx) {



    const detailsTemplate = (meme, isOwner) => html`
        <!-- Details Meme Page (for guests and logged users) -->
        <section id="meme-details">
            <h1>Meme Title: ${meme.title}
            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        ${meme.description}
                    </p>
                    ${isOwner ? buttons(meme) : ''}
                </div>
            </div>
        </section>`;

    const buttons = (meme) => html`
                        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                        <a class="button warning" href="/edit/${meme._id}">Edit</a>
                        <button id="deleteBtn" class="button danger">Delete</button>`;

    let memeId = ctx.params.id;
    let singleMeme = await rServices.getSingleResource(memeId, deleteHandler);

    ctx.render(detailsTemplate(singleMeme, isOwner()));

    function isOwner() {
        if (localStorage.getItem('id') === singleMeme._ownerId) {
            return true;
        } else {
            return false;
        }
    }

    //delete functionality
    if (isOwner()) {
        let deleteBtnElement = document.getElementById('deleteBtn');
        deleteBtnElement.addEventListener('click', deleteHandler)
    }

    async function deleteHandler(e) {
        e.preventDefault();

        if (confirm("Are you sure?")) {
            await rServices.deleteResource(memeId);
            ctx.page.redirect('/allMemes');
        }
        return;
    }

}
