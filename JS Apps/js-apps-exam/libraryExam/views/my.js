import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const myTemplate = (books) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
            ${books.map(b => singleBookTemplate(b))}
        </ul>
    </section>`;

    const singleBookTemplate = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
    `
    const myTemplateEmpty = () => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display paragraph: If the user doesn't have his own books  -->
        <p class="no-books">No books in database!</p>
    </section>`;

    let myBooksArr = await rServices.getUserResources(localStorage.getItem('id'));

    if(myBooksArr.length == 0){
        return ctx.render(myTemplateEmpty());
    }

    ctx.render(myTemplate(myBooksArr));

}