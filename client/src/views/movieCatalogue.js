import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../services/movieService.js';
import { userIsLoggedIn } from './navigationView.js';
import { movieTemplate } from './templates/movieTemplate.js';

const homePageTemplate = (movies) => html`
<section id="home-page">
    <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40;">
        <img src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
            class="img-fluid" alt="Responsive image" style="width: 150%; height: 200px">
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
    </div>
</section>
<h1 class="text-center">Movies</h1>
<section id="add-movie-button">
    <a href="/add-movie" class="btn btn-warning" style="${userIsLoggedIn() ? '' : 'display:none;'}">Add Movie</a>
</section>
<section id="movie">
    <div class=" mt-3 ">
        <div class="row d-flex d-wrap">
            <div class="card-deck d-flex justify-content-center"></div>

            ${movies}

        </div>
    </div>
    </div>
</section>
`;

export async function catalogue(ctx) {
    const allMovies = await getAllMovies();
    const moviesTemplateArray = allMovies.map(movieTemplate);
    const completedCatalogue = homePageTemplate(moviesTemplateArray);
    ctx.render(completedCatalogue);
}