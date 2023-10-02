import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const [filterMovies, setFilterMovies] = useState([]);
    const [searchError, setSearchError] = useState('');

    const checkbox = localStorage.getItem("isShort");
    const searchValue = localStorage.getItem('searchValue');

    const movies = JSON.parse(localStorage.getItem("movies"));
    
    useEffect(() => {
        searchMovies();
    }, [checkbox, searchValue])

    function searchMovies() {
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
            <Header isLoggedIn={props.isLoggedIn} />
            <main>
                <SearchForm onSearch={searchMovies} />
                <p className='movies__error'>{props.serverError}{searchError}</p>
                {props.isLoading ? <Preloader /> : (
                    <MoviesCardList
                        movies={filterMovies}
                        handleSavedClick={props.handleSavedClick}
                        isLike={props.isLike}
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default Movies;