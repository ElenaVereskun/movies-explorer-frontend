import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoggedIn }) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getMovies();
        /* setIsLoading(true); */
    }, [])

    function getMovies() {
        moviesApi.getMovies()
            .then((movies) => {
                localStorage.setItem("movies", JSON.stringify(movies))
                return movies;
            })
            .catch((err) => setSearchError('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
    }

    function searchMovies() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        const checkbox = JSON.parse(localStorage.getItem("isShort"));
        const searchValue = localStorage.getItem('searchValue');

        if (checkbox) {
            const filterMoviesByDuration = movies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40)
            })
            setFilterMovies(filterMoviesByDuration);
            setSearchError('');
            if (filterMoviesByDuration.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (searchValue) {
            const filterMoviesByName = movies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilterMovies(filterMoviesByName);
            setSearchError('');
            if (filterMoviesByName.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (checkbox && searchValue) {
            const filterMoviesByAll = movies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setFilterMovies(filterMoviesByAll);
            setSearchError('');
            if (filterMoviesByAll.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
    }
    return (
        <div className='movies'>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm onSearch={searchMovies} />
                <p className='movies__error'>{searchError}</p>
                {isLoading ? <Preloader /> : (
                    <MoviesCardList movies={filterMovies} />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default Movies;