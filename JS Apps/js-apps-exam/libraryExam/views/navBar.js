import { html, render } from "../node_modules/lit-html/lit-html.js";

import { authServices } from '../authServices.js';
import { rServices } from "../rServices.js";


export default function (ctx, next) {
    
    let navBarElement = document.getElementById('site-header');

    const navTemplate = (isAuthenticated) => html`
    <!-- Navigation -->
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
            <!-- Guest users -->
            ${isAuthenticated 
            ? templateIn()
            : templateOut()}
        </section>
    </nav>`

    const templateOut = () => html`
                <div id="guest">
                    <a class="button" href="/login">Login</a>
                    <a class="button" href="/register">Register</a>
                </div>`

    const templateIn = () => html`
                                <div id="user">
                                    <span>Welcome, ${localStorage.getItem('email')}</span>
                                    <a class="button" href="/my">My Books</a>
                                    <a class="button" href="/create">Add Book</a>
                                    <a class="button" href="#" @click=${logouthandler}>Logout</a>
                                </div>`

    render(navTemplate(authServices.isAuthenticated()), navBarElement)

    async function logouthandler() {
       

        await authServices.logoutReq();
        ctx.page.redirect('/dashboard')
    }

    next();

}







