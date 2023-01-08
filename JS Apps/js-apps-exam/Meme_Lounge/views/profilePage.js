import { html } from "../node_modules/lit-html/lit-html.js"
import { rServices } from "../rServices.js";


export default async function (ctx) {



    const profileTemplate = (memes) => html`
        <!-- Profile Page ( Only for logged users ) -->
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${localStorage.getItem('username')}</p>
                    <p>Email: ${localStorage.getItem('email')}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) -->
                ${memes.map(m => singleMemeTemplate(m))}
            </div>
        </section>`;

    const singleMemeTemplate = (meme) => html`
                <div class="user-meme">
                    <p class="user-meme-title">${meme.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                    <a class="button" href="/details/${meme._id}">Details</a>
                </div>`;

    const profileTemplateEmpty = (memes) => html`
        <!-- Profile Page ( Only for logged users ) -->
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
                <div class="user-content">
                    <p>Username: ${localStorage.getItem('username')}</p>
                    <p>Email: ${localStorage.getItem('email')}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : If user doesn't have own memes  -->
                <p class="no-memes">No memes in database.</p>
            </div>
        </section>`;
    



    let userMemesArr = await rServices.getUserResources(localStorage.getItem('id'));

    if(userMemesArr.length == 0){
        return ctx.render(profileTemplateEmpty(userMemesArr));
    }
    
    ctx.render(profileTemplate(userMemesArr));
  




}