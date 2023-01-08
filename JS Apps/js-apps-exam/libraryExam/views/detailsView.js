import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const detailsTemplate = (book) => html`
            <!-- Details Page ( for Guests and Users ) -->
            <section id="details-page" class="details">
                <div class="book-information">
                    <h3>${book.title}</h3>
                    <p class="type">Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <div class="actions">
                        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                        ${isOwner(book)
                        ? loggedInBtns(book)
                        : ''}
                        <!-- Bonus -->
                        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                        <a class="button" href="#">Like</a>
                        <!-- ( for Guests and Users )  -->
                        <div class="likes">
                            <img class="hearts" src="/images/heart.png">
                            <span id="total-likes">Likes: 0</span>
                        </div>
                        <!-- Bonus -->
                    </div>
                </div>
                <div class="book-description">
                    <h3>Description:</h3>
                    <p>${book.description}</p>
                </div>
            </section>`;

    const loggedInBtns = (book) => html`
                                <a class="button" href="/edit/${book._id}">Edit</a>
                                <a class="button" href="/delete/${book._id}">Delete</a>`;

    let bookId = ctx.params.Id
    let book = await rServices.getSingleResource(bookId);

    ctx.render(detailsTemplate(book))

    function isOwner(carInfo) {
        if (carInfo._ownerId === localStorage.getItem('id')) {
            return true;
        } else {
            return false;
        }
    }

}