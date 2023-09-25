/* export const BASE_URL = "https://api.mesto.elenavereskun.nomoreparties.co"; */
export const BASE_URL = "http://localhost:3001";
export const MOVIE_URL = "https://api.nomoreparties.co/beatfilm-movies";
function errorCheck(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getUserProfileInfo = ({ token }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => errorCheck(res))
}

export const editUserInfo = ({ name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ name, email })
    })
        .then(res => errorCheck(res))
}

export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((res) => {
            return res
        })
        .then(res => errorCheck(res))
};

export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ email, password }),
    })
        .then(res => errorCheck(res))
};
export const getToken = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    })
        .then(res => errorCheck(res))
};

export const savedMovie = ({ data }) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co + ${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co + ${data.image.formats.thumbmail.url}`,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            id: data.id,
        })
    }).then(res => errorCheck(res))
};

export const removeMovie = ({ id }) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ id }),
    }).then(res => errorCheck(res))
};