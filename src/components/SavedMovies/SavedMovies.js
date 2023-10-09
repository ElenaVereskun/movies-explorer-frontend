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
    const [isShort, setIsShort] = useState();
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
        setFilterSavedMovies(savedMovies);
    }, [savedMovies]);//без зависимости удаляет карточки только после перезагрузки

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    const handleChek = (e) => {
        const isShort = e.target.checked;
        setIsShort(isShort);
    };

    function searchMovies() {
        if (!isShort && searchValue === '') {
            setFilterSavedMovies(savedMovies);
        }
        if (!isShort) {
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
        if (!isShort && searchValue) {
            const filterMoviesByAll = savedMovies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
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
                    searchValue={searchValue}
                    handleChange={handleChange}                    
                    isShort={isShort}
                    handleChek={handleChek}/>
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