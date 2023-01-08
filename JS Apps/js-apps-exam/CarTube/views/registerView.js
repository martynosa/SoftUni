import { html } from "../node_modules/lit-html/lit-html.js";


import { authServices } from "../authServices.js";



export default function (ctx) {

    const registerTemplate = () => html`
    <section id="register">
        <div class="container">
            <form id="register-form" @submit=${onSubmit}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>`;

    ctx.render(registerTemplate());

    async function onSubmit(e) {
        e.preventDefault();
        let formElement = e.currentTarget;
        let formData = new FormData(formElement)
        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPass');

        if ((password.length == 0 || repeatPass.length == 0) && password !== repeatPass) {
            return window.alert('something is wrong');
        }

        let userData = {
            username: username,
            password: password
        }

        await authServices.registerReq(userData);
        ctx.page.redirect('/home')

    }

}