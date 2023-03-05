// like endpoint, dislike endpoint, like per user ... 

const LIKES_ENDPOINT = 'http://localhost:3030/likes';

export async function getMovieLikes(movieId) {
    const response = await fetch(`${LIKES_ENDPOINT}?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    const data = await response.json();
    return data;
}

export async function getMovieLikesByUser(movieId, userId) {
    const response = await fetch(`${LIKES_ENDPOINT}?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22 `);
    const data = await response.json();

    let result = {data: data, liked: false};
    
    if (data.some(movie => movie.movieId === movieId)) {
        result.liked = true;
    }
    return result;
}

export async function likeMovie(id) {
    const options = {
        method: 'POST',
        headers: {},
        body: JSON.stringify({ movieId: id })
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(LIKES_ENDPOINT, options);

    return response.json();
}

export async function dislikeMovie(id) {
    const options = {
        method: 'delete',
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${LIKES_ENDPOINT}/${id}`, options);

    return response.json();
}