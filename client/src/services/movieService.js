// movies catalogue endpoint, movie details endpoints etc

const MOVIES_ENDPOINT = 'http://localhost:3030/movies';

export async function getAllMovies() {
    const response = await fetch(MOVIES_ENDPOINT);
    const data = await response.json();
    return data;
}

export async function createMovie(data) {
    const options = {
        method: 'POST',
        headers: {},
        body: JSON.stringify(data)
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(MOVIES_ENDPOINT, options);

    return await response.json();
}

export async function getSingleMovie(id) {
    const response = await fetch(`${MOVIES_ENDPOINT}/${id}`);
    const data = await response.json();
    return data;
}

export async function updateMovie(id, data) {
    const options = {
        method: 'PUT',
        headers: {},
        body: JSON.stringify(data)
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${MOVIES_ENDPOINT}/${id}`, options);

    await response.json();
}

export async function deleteMovie(id) {
    const options = {
        method: 'delete',
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${MOVIES_ENDPOINT}/${id}`, options);

    await response.json();
}

export async function getMyMoviePublications(userId) {
    const response = await fetch(`${MOVIES_ENDPOINT}?where=_ownerId%3D%22${userId}%22`);
    const data = await response.json();
    return data;
}