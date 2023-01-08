import { html } from "../node_modules/lit-html/lit-html.js";

import { authServices } from "../authServices.js";



export default function (ctx) {


    const loginTemplate = (onSubmit) => html`
    <section id="login">
        <section id="main">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>
    
                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">
    
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
    </section>`;

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        let formElement = e.currentTarget;
        let formData = new FormData(formElement)
        let username = formData.get('username');
        let password = formData.get('password');

        let userData = {
            username: username,
            password: password
        }

        //redirects regardless if successful or not
        await authServices.loginReq(userData);
        ctx.page.redirect('/home')

    }

}