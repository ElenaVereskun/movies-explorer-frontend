class MoviesApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers
    }

    getMovies() {
        return fetch(this.baseUrl, {
            headers: {
                ...this.headers
            }
        })
            .then(res => this._errorCheck(res))
    }
    _errorCheck(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
}

const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;