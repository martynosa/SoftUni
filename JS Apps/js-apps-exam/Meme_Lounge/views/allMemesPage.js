import { html } from "../node_modules/lit-html/lit-html.js"
import { rServices } from "../rServices.js"


export default async function (ctx) {

    const allMemesTemplate = (memes) => html`
    <!-- All Memes Page ( for Guests and Users )-->
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            ${memes.map(m => singleMemeTemplate(m))}
        </div>
    </section>`;

    const allMemesTemplateEmpty = () => html`
    <!-- All Memes Page ( for Guests and Users )-->
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            <p class="no-memes">No memes in database.</p>
        </div>
    </section>`;

    const singleMemeTemplate = (meme) => html`
    <div class="meme" data-ownerId=${meme._ownerId}>
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${meme._id}">Details</a>
            </div>
        </div>
    </div>`;

    let memesArr = await rServices.getAllResources();

    if (memesArr.length == 0) {
        return ctx.render(allMemesTemplateEmpty());
    }

    ctx.render(allMemesTemplate(memesArr));

}