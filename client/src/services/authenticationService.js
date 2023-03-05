// we connect only to the register , login, logout endpoints of the server

const AUTHENTICATION_ENDPOINT = 'http://localhost:3030/users';

export async function register(username, password) {
    const response = await fetch(`${AUTHENTICATION_ENDPOINT}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('username', data.username);
    } else {
        alert(data.message);
        throw new Error();
    }
}

export async function login(username, password) {
    const response = await fetch(`${AUTHENTICATION_ENDPOINT}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('id', data._id);
        sessionStorage.setItem('username', data.username);
    } else {
        alert(data.message);
        throw new Error();
    }
}

export async function logout() {
    const response = await fetch(`${AUTHENTICATION_ENDPOINT}/logout`, {
        method: 'GET',
        headers: { 'X-Authorization': sessionStorage.getItem('authToken') }
    });
    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('username');
    } else {
        alert(response.status);
        throw new Error();
    }
}