import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js'

import nav from "./views/nav.js"
import homePage from "./views/homePage.js"
import loginPage from "./views/loginPage.js"
import registerPage from './views/registerPage.js';
import allMemesPage from './views/allMemesPage.js';
import detailsPage from './views/detailsPage.js';
import createPage from './views/createPage.js';
import editPage from './views/editPage.js';
import profilePage from './views/profilePage.js';


const mainElement = document.getElementById('main');

page(ctxExtension);
page(nav);
page('/', `/home`);
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage)
page('/allMemes', allMemesPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/profile', profilePage);


page.start();






function renderer(template) {
    return render(template, mainElement);
}

function ctxExtension(ctx, next) {
    ctx.render = renderer;
    next();
}