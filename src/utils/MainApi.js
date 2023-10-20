export const BASE_URL = "https://api.vereskun.nomoredomainsicu.ru";
export const MOVIES_URL = "https://api.nomoreparties.co";

function errorCheck(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getUserProfileInfo = (token) => {
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

export const savedMovie = data => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
            country: data.country,
            description: data.description,
            director: data.director,
            duration: data.duration,
            image: `${MOVIES_URL}${data.image.url}`,
            movieId: data.id,
            nameEN: data.nameEN,
            nameRU: data.nameRU,
            thumbnail: `${MOVIES_URL}${data.image.formats.thumbnail.url}`,
            trailerLink: data.trailerLink,
            year: data.year,
        })
    }).then(res => errorCheck(res))
};

export const deleteMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({ movieId }),
    }).then(res => errorCheck(res))
};


export const getSavedMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => errorCheck(res))
}