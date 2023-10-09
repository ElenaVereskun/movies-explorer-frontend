import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');
    const [isShort, setIsShort] = useState(false);
    const [searchValue, setSearchValue] = useState();
    const localIsShort = localStorage.getItem('localIsShort');
    const localSearchValue = localStorage.getItem('localSearchValue');

    useEffect(() => {
        if (localIsShort === 'false' && localSearchValue) {
            setFilterMovies(JSON.parse(localStorage.getItem('filterMoviesByName')));
        }
        if (localIsShort === 'true') {
            setFilterMovies(JSON.parse(localStorage.getItem('filterMoviesByDuration')));
        }
        if (localIsShort === 'true' && localSearchValue) {
            setFilterMovies(JSON.parse(localStorage.getItem('filterMoviesByAll')));
        }
    }, []);

    useEffect(() => {
        setSearchValue(localSearchValue);
        setIsShort((localIsShort === 'true') || (localIsShort === 'false'));
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        localStorage.setItem("localSearchValue", value);
    };

    const handleChek = (e) => {
        const isShort = e.target.checked;
        setIsShort(isShort);
        localStorage.setItem("localIsShort", isShort);
    };

    function searchMovies() {
        const movies = JSON.parse(localStorage.getItem("movies"));
        if (!isShort) {
            const filterMoviesByDuration = movies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40)
            })
            setFilterMovies(filterMoviesByDuration);
            localStorage.setItem("filterMoviesByDuration", JSON.stringify(filterMoviesByDuration));
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
            localStorage.setItem("filterMoviesByName", JSON.stringify(filterMoviesByName));
            setSearchError('');
            if (filterMoviesByName.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
        if (!isShort && searchValue) {
            const filterMoviesByAll = movies.filter((movie) => {
                return (movie.duration === 40 || movie.duration < 40) &&
                    (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()));
            });
            setFilterMovies(filterMoviesByAll);
            localStorage.setItem("filterMoviesByAll", JSON.stringify(filterMoviesByAll));
            setSearchError('');
            if (filterMoviesByAll.length === 0) {
                setSearchError('Ничего не найдено');
            }
        }
    };

    return (
        <div className='movies'>
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSearch={searchMovies}
                    searchValue={searchValue}
                    handleChange={handleChange}
                    isShort={isShort}
                    handleChek={handleChek} />
                <p className='movies__error'>{props.serverError}{searchError}</p>
                {props.isLoading ? <Preloader /> : (
                    <MoviesCardList
                        movies={filterMovies}
                        handleSavedClick={props.handleSavedClick}
                        filmsIsLike={props.filmsIsLike}
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default Movies;