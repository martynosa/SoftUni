import { html, render } from "../node_modules/lit-html/lit-html.js";

import { authServices } from '../authServices.js';



export default function (ctx, next) {
    let navBarElement = document.getElementById('navSection');

    const LoggedButtons = (username) => html`
    <!-- Logged users -->
        <div id="profile">
            <a>Welcome ${username}</a>
            <a href="/myCars">My Listings</a>
            <a href="/createListing">Create Listing</a>
            <a href="javascript:void(0)" @click=${logouthandler}>Logout</a>
        </div>`;

    const logoutButtons = () => html`
    <!-- Guest users -->
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`;

    const navBarTemplate = (isAuthenticated) => html`
    <header>
        <nav>
            <a class="active" href="/home">Home</a>
            <a href="/allListings">All Listings</a>
            <a href="/search">By Year</a>
            ${!isAuthenticated
                ? logoutButtons()
                : LoggedButtons(localStorage.getItem('username'))
            }
        </nav>
    </header>`;
    
    async function logouthandler(){

        await authServices.logoutReq();
        ctx.page.redirect('/home')
    }

    render(navBarTemplate(authServices.isAuthenticated()), navBarElement);
    next();

}







