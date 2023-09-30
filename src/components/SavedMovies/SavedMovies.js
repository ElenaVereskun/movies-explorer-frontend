import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn, savedMovies, isSaved, deleteMovie }) {

    const [filterSavedMovies, setFilterSavedMovies] = useState([]);

    const checkbox = localStorage.getItem('isShort');
    const searchSavedValue = localStorage.getItem('searchSavedValue');

    useEffect(() => {
        setFilterSavedMovies(savedMovies);
    }, []);

    useEffect(() => {
        searchMovies();
    }, [checkbox, searchSavedValue])

    function searchMovies() {
        if (checkbox === 'true') {
            const filterMoviesByDuration = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40)
            })
            setFilterSavedMovies(filterMoviesByDuration);
        }
        if (searchSavedValue) {
            const filterMoviesByName = savedMovies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchSavedValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchSavedValue.toLowerCase())
            });
            setFilterSavedMovies(filterMoviesByName);
        }
        if (checkbox === 'true' && searchSavedValue) {
            const filterMoviesByAll = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchSavedValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchSavedValue.toLowerCase()));
            });
            setFilterSavedMovies(filterMoviesByAll);
        }
    }
    return (
        <div className='saved-movies'>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm
                    onSearch={searchMovies}
                    isSaved={isSaved} />
                <MoviesCardList
                    savedMovies={filterSavedMovies}
                    isSaved={isSaved}
                    deleteMovie={deleteMovie}
                />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies;