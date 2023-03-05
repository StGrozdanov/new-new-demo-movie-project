// movies catalogue endpoint, movie details endpoints etc

export async function getAll() {
    const response = await fetch(`${baseUrl}/movies`);
    const data = await response.json();
    return data;
}

export async function create(data) {
    const options = {
        method: 'POST',
        headers: {},
        body: JSON.stringify(data)
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${baseUrl}/movies`, options);

    return await response.json();
}

export async function getSingle(id) {
    const response = await fetch(`${baseUrl}/movies/${id}`);
    const data = await response.json();
    return data;
}

export async function update(id, data) {
    const options = {
        method: 'PUT',
        headers: {},
        body: JSON.stringify(data)
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${baseUrl}/movies/${id}`, options);

    await response.json();
}

export async function remove(id) {
    const options = {
        method: 'delete',
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token !== null) {
        options.headers['X-Authorization'] = token;
    }

    const response = await fetch(`${baseUrl}/movies/${id}`, options);

    await response.json();
}

export async function getMyPublications(userId) {
    const response = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    const data = await response.json();
    return data;
}