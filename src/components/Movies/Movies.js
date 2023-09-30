import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({ isLoggedIn, handleSavedClick, isLike }) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const checkbox = localStorage.getItem("isShort");
    const searchValue = localStorage.getItem('searchValue');
    
    function getMovies() {
        setIsLoading(true);
        moviesApi.getMovies()
            .then((movies) => {
                localStorage.setItem("movies", JSON.stringify(movies))
                return movies;
            })
            .catch((err) => setSearchError('Во время запроса произошла ошибка.Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
            .finally(setIsLoading(false));
    }
 
    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        searchMovies();
    }, [checkbox, searchValue])

    function searchMovies() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (checkbox === 'true') {
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
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilterMovies(filterMoviesByName);
            setSearchError('');
            if (filterMoviesByName.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (checkbox === 'true' && searchValue) {
            const filterMoviesByAll = movies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
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
                    <MoviesCardList
                        movies={filterMovies}
                        handleSavedClick={handleSavedClick}
                       /*  isLike={isLike} */
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default Movies;