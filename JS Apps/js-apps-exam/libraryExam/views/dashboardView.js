import { html } from "../node_modules/lit-html/lit-html.js";
import { rServices } from "../rServices.js";


export default async function (ctx) {

    const dashboardTemplate = (books) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        <ul class="other-books-list">
            ${books.map(b => singleBookTemplate(b))}
        </ul>
    </section>`;

    const singleBookTemplate =(book)=> html`
     <li class="otherBooks">
                <h3>${book.title}</h3>
                <p>Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <a class="button" href="/details/${book._id}">Details</a>
            </li>`;

const emptyDashboardTemplate = () => html`
   <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display paragraph: If there are no books in the database -->
        <p class="no-books">No books in database!</p>
    </section>`;

    let booksArr = await rServices.getAllResources();

    if (booksArr.length == 0){
        return ctx.render(emptyDashboardTemplate());
    }

    ctx.render(dashboardTemplate(booksArr));

};


