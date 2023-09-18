/* export const BASE_URL = "https://api.mesto.elenavereskun.nomoreparties.co"; */
export const BASE_URL = "http://localhost:3001";
function errorCheck(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getUserProfileInfo = ({ token }) => {
    return fetch(`${this.baseUrl}/profile`, {
        headers: {
            ...this.headers,
            authorization: `Bearer ${token}`
        }
    })
        .then(res => this._errorCheck(res))
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
}