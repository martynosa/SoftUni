import { rServices } from "../rServices.js";

export default async function (ctx) {
    await rServices.deleteResource(ctx.params.id)
    ctx.page.redirect('/dashboard');
}
