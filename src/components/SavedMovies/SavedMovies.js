import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn,
    savedMovies,
    isSaved,
    deleteMovie }) {

    const [filterSavedMovies, setFilterSavedMovies] = useState([]);
    const [isShort, setIsShort] = useState(false);
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        searchMovies();
    }, [isShort]);

    useEffect(() => {
        setFilterSavedMovies(savedMovies);
    }, [savedMovies]);

    function searchMovies() {
        if (isShort) {
            const filterMoviesByDuration = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40)
            })
            setFilterSavedMovies(filterMoviesByDuration);
        }
        if (searchValue) {
            const filterMoviesByName = savedMovies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
            });
            setFilterSavedMovies(filterMoviesByName);
        }
        if (isShort && searchValue) {
            const filterMoviesByAll = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setFilterSavedMovies(filterMoviesByAll);
        }
    }

    function handleChangeSearch(e) {
        const value = e.target.value;
        setSearchValue(value);
    }

    function handleChek(e) {
        const isShort = e.target.checked;
        setIsShort(isShort);
    };


    return (
        <div className='saved-movies'>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                <SearchForm
                    onSearch={searchMovies}
                    searchValue={searchValue}
                    handleChangeSearch={handleChangeSearch}
                    isShort={isShort}
                    handleChek={handleChek}
                    onClickCheckbox={searchMovies} />
                <MoviesCardList
                    filterSavedMovies={filterSavedMovies}
                    isSaved={isSaved}
                    deleteMovie={deleteMovie}
                />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies;