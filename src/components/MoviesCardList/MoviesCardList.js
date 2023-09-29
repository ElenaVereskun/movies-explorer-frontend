import { React, useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';


function MoviesCardList({
    movies,
    savedMovies,
    isSaved,
    handleSavedClick,
    deleteMovie }) {
    const [moviesView, setMoviesView] = useState();
    /* const [isMoreMovies, setIsMoreMovies] = useState(false); */

    const MOBILE_VIEW = 320;
    const MOBILE_MEDIUM_VIEW = 480;
    const PAD_VIEW = 760;
    const DESKTOP_VIEW = 1270;
    const MOBILE_COUNT = 5;
    const PAD_COUNT = 8;
    const DESKTOP_COUNT = 12;

    useEffect(() => {
        window.addEventListener('resize', (evt) => {
            moviesToOpen();
            /*  moreMovies(); */
        })
    }, []);

    function moviesToOpen() {
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

    /*      function moreMovies(movies){
                if(movies.slice(moviesView).length !== 0){
                    setIsMoreMovies(true);
                }else{
                    setIsMoreMovies(false);
                }
            } */
    return (
        <>
            <section className='movies-list'>
                <ul className='movies-list__container'>
                    {isSaved
                        ?
                        savedMovies.map((saveOwnerMovie) => (
                            <MoviesCard movie={saveOwnerMovie}
                                isSaved={isSaved}
                                key={saveOwnerMovie.id}
                                onMovieDelete={deleteMovie}>
                            </MoviesCard>
                        ))
                        :
                        movies.slice(0, moviesView).map((movie) => (
                            <MoviesCard movie={movie}
                                key={movie.id}
                                onMovieLike={handleSavedClick}>
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