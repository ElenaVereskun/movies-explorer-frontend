import { React, useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';
import {
    MOBILE_VIEW,
    MOBILE_MEDIUM_VIEW,
    PAD_VIEW,
    DESKTOP_VIEW,
    MOBILE_COUNT,
    PAD_COUNT,
    DESKTOP_COUNT
} from '../../utils/const';

function MoviesCardList({
    movies,
    filterSavedMovies,
    isSaved,
    handleSavedClick,
    deleteMovie, 
    savedMovies}) {

    const [moviesView, setMoviesView] = useState('');

    function compareMovie(savedFilms, movie) {
        return savedFilms.some((savedFilm) => savedFilm.movieId === movie.id);
      }

    function moviesToOpen() {
        window.addEventListener('resize', moviesToOpen);
        if (window.innerWidth < MOBILE_VIEW) {
            setMoviesView(MOBILE_COUNT);
        }
        if (MOBILE_VIEW < window.innerWidth < MOBILE_MEDIUM_VIEW) {
            setMoviesView(MOBILE_COUNT);
        }
        if (MOBILE_MEDIUM_VIEW < window.innerWidth < PAD_VIEW) {
            setMoviesView(PAD_COUNT);
        }
        if (PAD_VIEW < window.innerWidth < DESKTOP_VIEW) {
            setMoviesView(PAD_COUNT);
        }
        if (DESKTOP_VIEW < window.innerWidth) {
            setMoviesView(DESKTOP_COUNT);
        }
    }

    function handleMoreClick() {
        if (MOBILE_VIEW < window.innerWidth < PAD_VIEW) {
            setMoviesView(moviesView + 2);
        }
        if (PAD_VIEW < window.innerWidth < DESKTOP_VIEW) {
            setMoviesView(moviesView + 2);
        }
        if (DESKTOP_VIEW < window.innerWidth) {
            setMoviesView(moviesView + 3);
        }
    }

    useEffect(() => {
        moviesToOpen();
        window.removeEventListener('resize', moviesToOpen);
    }, []);

    return (
        <>
            <section className='movies-list'>
                <ul className='movies-list__container'>
                    {isSaved
                        ?
                        filterSavedMovies.map((saveOwnerMovie) => (
                            <MoviesCard movie={saveOwnerMovie}
                                key={saveOwnerMovie._id}
                                onMovieDelete={deleteMovie}
                                isSaved={isSaved}
                            >
                            </MoviesCard>
                        ))
                        :
                        movies.slice(0, moviesView).map((movie) => (
                            <MoviesCard movie={movie}
                                key={movie.id}
                                onMovieSave={handleSavedClick}
                                isLiked={compareMovie(savedMovies, movie)}
                            >
                            </MoviesCard>
                        ))
                    }
                </ul>
            </section>
            {isSaved
                ? ''
                :
                movies.slice(moviesView).length !== 0
                    ? <MoviesCardListMore handleMoreClick={handleMoreClick} />
                    : <div className='saved-movies__black-square'></div>
            }
        </>
    )
}
export default MoviesCardList;