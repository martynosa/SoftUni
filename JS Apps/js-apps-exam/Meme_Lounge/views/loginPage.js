
import { authServices } from "../authServices.js";
import { html } from "../node_modules/lit-html/lit-html.js"



export default async function (ctx) {



    const loginTemplate = (onSubmit) => html`
        <!-- Login Page ( Only for guest users ) -->
        <section id="login">
            <form id="login-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>`;

    async function onSubmit(e) {
        e.preventDefault();
        let form = new FormData(e.target);

        let email = form.get('email');
        let password = form.get('password');

        //empty fields validation
        if (email.trim() == '' || password.trim() == '') {
            return window.alert('Please fill in everything');
        }


        let userObj = {
            email: email.trim(),
            password: password.trim()
        }

        await authServices.loginReq(userObj);
        ctx.page.redirect('/AllMemes');

    }

    ctx.render(loginTemplate(onSubmit));

}