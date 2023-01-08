import { html, render } from "../node_modules/lit-html/lit-html.js"

import { authServices } from "../authServices.js";



export default function (ctx, next) {

    const navElement = document.getElementById('nav');



    const navTemplate = (email, logout) => html`
                    <a href="/allMemes">All Memes</a>
                    <!-- Logged users -->
                    <div class="user">
                        <a href="/create">Create Meme</a>
                        <div class="profile">
                            <span>Welcome, ${email}</span>
                            <a href="/profile">My Profile</a>
                            <a href="/logout" @click=${logout}>Logout</a>
                        </div>
                    </div>`;

    const navTemplateGuest = () => html`
                    <a href="/allMemes">All Memes</a>
                    <!-- Guest users -->
                    <div class="guest">
                        <div class="profile">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </div>
                        <a class="active" href="/home">Home Page</a>
                    </div>`;


    if (localStorage.getItem('email') === null) {
        render(navTemplateGuest(), navElement);
    } else {
        render(navTemplate(localStorage.getItem('email'), logout), navElement);

    }

    //logout
    async function logout(e) {
        e.preventDefault();
        await await authServices.logoutReq();
        render(navTemplateGuest(), navElement);
        ctx.page.redirect('/home');
    }

    next();

}