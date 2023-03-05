// routing only and onlyyyyy routing, nothing else
import page from '../node_modules/page/page.mjs';
import { catalogue } from './views/movieCatalogue';
import { loginPage } from './views/loginView.js';
import { registerPage } from './views/registerView.js';
import { setUpMiddleware } from './middlewares/setUpMidware.js';
import { detailsPage } from './views/detailsView.js';
import { addMoviePage } from './views/addMovieView.js';
import { editMoviePage } from './views/editMovieView.js';

page('/', setUpMiddleware, catalogue);
page('/login', setUpMiddleware, loginPage);
page('/register', setUpMiddleware, registerPage);
page('/details/:id', setUpMiddleware, detailsPage);
page('/add-movie', setUpMiddleware, addMoviePage);
page('/edit-movie/:id', setUpMiddleware, editMoviePage);

page.start();