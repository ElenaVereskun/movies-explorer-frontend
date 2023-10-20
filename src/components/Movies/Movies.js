import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isShort, setIsShort] = useState(localStorage.getItem('localIsShort') === 'true');
    const [searchValue, setSearchValue] = useState(localStorage.getItem('localSearchValue'));

    useEffect(() => {
        searchMovies();
    }, [isShort]);

    function searchMovies() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (isShort) {
            const filterMoviesByDuration = movies.filter((movie) => {
                return (movie.duration <= 40)
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
        if (isShort && searchValue) {
            const filterMoviesByAll = movies.filter((movie) => {
                return (movie.duration <= 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setFilterMovies(filterMoviesByAll);
            setSearchError('');
            if (filterMoviesByAll.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
    };

    function handleChangeSearch(e) {
        const value = e.target.value;
        setSearchValue(value);
        localStorage.setItem("localSearchValue", value);
    };
    function handleChek(e) {
        const isShort = e.target.checked;
        setIsShort(isShort);
        localStorage.setItem("localIsShort", isShort);
    };

    return (
        <div className='movies'>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSearch={searchMovies}
                    searchValue={searchValue}
                    handleChangeSearch={handleChangeSearch}
                    isShort={isShort}
                    handleChek={handleChek}
                    onClickCheckbox={searchMovies} />
                <p className='movies__error'>{props.serverError}{searchError}</p>
                {props.isLoading ? <Preloader /> : (
                    <MoviesCardList
                        movies={filterMovies}
                        handleSavedClick={props.handleSavedClick}
                        savedMovies={props.savedMovies} 
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default Movies;