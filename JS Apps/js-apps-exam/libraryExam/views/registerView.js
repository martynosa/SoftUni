import { html } from "../node_modules/lit-html/lit-html.js";

import { authServices } from "../authServices.js";

export default function (ctx) {

    const registerTemplate = () => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="register">
        <form id="register-form" action="" method="" @submit=${onSubmit}>
            <fieldset>
                <legend>Register Form</legend>
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
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>`;

    ctx.render(registerTemplate());

    async function onSubmit(e) {
        e.preventDefault();
        let formElement = e.currentTarget;
        let formData = new FormData(formElement)
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPass = formData.get('confirm-pass');

        if(email.trim() === '' || password.trim() === '' || repeatPass.trim() ===''){
            return window.alert('Please fill in both email and password');
        }

        let userData = {
            email: email,
            password: password
        }

        await authServices.registerReq(userData);
        ctx.page.redirect('/dashboard')

    }

}