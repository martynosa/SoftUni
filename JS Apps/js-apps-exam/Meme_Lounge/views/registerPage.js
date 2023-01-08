import { authServices } from "../authServices.js";
import { html } from "../node_modules/lit-html/lit-html.js"


export default async function (ctx) {


    const registerTemplate = (onSubmit) => html`
        <!-- Register Page ( Only for guest users ) -->
        <section id="register">
            <form id="register-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>`;

    async function onSubmit(e) {
        e.preventDefault();
        let form = new FormData(e.target);

        let username = form.get('username');
        let email = form.get('email');
        let password = form.get('password');
        let repeatPass = form.get('repeatPass');
        let gender = form.get('gender');

        //empty fields validation
        if (username.trim() === ''
            || email.trim() === ''
            || password.trim() === ''
            || gender === null) {
            return window.alert('Please fill in everything');
        }

        //passwords match validation
        if (password !== repeatPass) {
            return window.alert('Passwords don\'t match');
        }

        let userObj = {
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
            gender: gender.trim(),
        }

        await authServices.registerReq(userObj);
        ctx.page.redirect('/AllMemes');

    }

    ctx.render(registerTemplate(onSubmit));

}