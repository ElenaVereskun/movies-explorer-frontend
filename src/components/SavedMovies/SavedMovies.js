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
    }, [isShort, savedMovies ]);

    function searchMovies() {
        let filterMovies = savedMovies;
        if (isShort) {
            filterMovies = savedMovies.filter((movie) => {
                return (movie.duration <= 40)
            });
        }
        if (searchValue) {
            filterMovies = savedMovies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
            });
        }
        if (isShort && searchValue) {
            filterMovies = savedMovies.filter((movie) => {
                return (movie.duration <= 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });            
        }
        setFilterSavedMovies(filterMovies);
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