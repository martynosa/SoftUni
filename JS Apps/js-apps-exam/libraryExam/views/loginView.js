import { html } from "../node_modules/lit-html/lit-html.js";

import { authServices } from "../authServices.js";



export default function (ctx) {


    const loginTemplate = (onSubmit) => html`
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="login">
        <form id="login-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Login Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>`;

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        let formElement = e.currentTarget;
        let formData = new FormData(formElement)
        let email = formData.get('email');
        let password = formData.get('password');

        if(email.trim() === '' || password.trim() === ''){
            return window.alert('Please fill in both email and password');
        }

        let userData = {
            email: email,
            password: password
        }

        await authServices.loginReq(userData);
        ctx.page.redirect('/dashboard');

    }

}