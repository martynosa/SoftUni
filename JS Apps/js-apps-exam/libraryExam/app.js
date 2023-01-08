import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js'

import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import dashboardView from './views/dashboardView.js';
import navBar from './views/navBar.js';
import detailsView from './views/detailsView.js';
import createView from './views/createView.js';
import deleteView from './views/deleteView.js';
import my from './views/my.js';
import editView from './views/editView.js';



const mainElement = document.getElementById('site-content');


page(extendContex);
page(navBar)
page('/dashboard',dashboardView)
page('/details/:Id', detailsView)
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);
page('/my', my);

page.start();


function renderer(template) {
    render(template, mainElement);
}

function extendContex(ctx, next) {
    ctx.render = renderer;
    next();
}

