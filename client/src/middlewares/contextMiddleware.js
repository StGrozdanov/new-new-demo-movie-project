// the idea is -> за всяка страница имаме едно и също поведение. Тоест във логин искаме да вземем нещо от
// локален сторидж, в регистрацията също ни трябва, трябва ни НАВСЯКЪДЕ
import { render } from '../../node_modules/lit-html/lit-html.js';

const mainRootElement = document.getElementById('container');

export function setUpMiddleware(ctx, next) {
    ctx.render = (content) => render(content, mainRootElement);
    next();
}