import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as mainApi from '../../utils/MainApi';

function SavedMovies({ isLoggedIn }) {

    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        mainApi.getMovies()
            .then((savedMovies) => {
                setSavedMovies(savedMovies);
            })
            .catch((err) => console.log(`${err}`))
    }, []);
    console.log(savedMovies);
    /* function searchMovies() {
        const checkbox = JSON.parse(localStorage.getItem("isShort"));
        const searchValue = localStorage.getItem('searchValue');

        if (checkbox) {
            const filterMoviesByDuration = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40)
            })
            setSavedMovies(filterMoviesByDuration);
        }
        if (searchValue) {
            const filterMoviesByName = savedMovies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
            });
            setSavedMovies(filterMoviesByName);
        }
        if (checkbox && searchValue) {
            const filterMoviesByAll = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setSavedMovies(filterMoviesByAll);
        }
    } */

    return (
        <div className='saved-movies'>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm /* onSearch={searchMovies} */ />
                <MoviesCardList savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                />
                <div className='saved-movies__black-square'></div>
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies;