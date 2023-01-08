import page from './node_modules/page/page.mjs';
import { render } from './node_modules/lit-html/lit-html.js'


import homeView from './views/homeView.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import navBar from './views/navBar.js';
import allListingsView from './views/allListingsView.js';
import createView from './views/createView.js';
import detailsView from './views/detailsView.js';
import myCarsView from './views/myCarsView.js';
import deleteView from './views/deleteView.js';
import editView from './views/editView.js';
import searchView from './views/searchView.js';

const mainElement = document.getElementById('site-content');



page(extendContex);
page(navBar);
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/allListings', allListingsView);
page('/createListing', createView);
page('/myCars', myCarsView);
page('/delete/:id', deleteView);
page('/edit/:id', editView);
// /:id you can access this through the context/have to be in the template route #${id}
page('/details/:carId', detailsView);
page('/search', searchView)
page('/', '/home');



page.start();


function renderer(template) {
    render(template, mainElement);
}

function extendContex(ctx, next) {
    ctx.render = renderer;
    next();
}

