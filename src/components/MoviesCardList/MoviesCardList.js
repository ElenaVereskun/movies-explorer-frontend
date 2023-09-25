import { React, useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';

function MoviesCardList({ movies }) {
    const [moviesView, setMoviesView] = useState();
    const [count, setCount] = useState();
    const [isMoreMovies, setIsMoreMovies] = useState(true);

    const MOBILE_VIEW = 320;
    const PAD_VIEW = 768;
    const DESKTOP_VIEW = 1280;
    const MOBILE_COUNT = 5;
    const PAD_COUNT = 8;
    const DESKTOP_COUNT = 12;

    useEffect(() => {
        window.addEventListener('resize', (evt) => {            
            if (MOBILE_VIEW < window.innerWidth < PAD_VIEW) {
                setMoviesView(MOBILE_COUNT);
            }
            if (PAD_VIEW < window.innerWidth < DESKTOP_VIEW) {
                setMoviesView(PAD_COUNT);
            }
            if (DESKTOP_VIEW < window.innerWidth) {
                setMoviesView(DESKTOP_COUNT);
            }
        })
        /*          return () => {
                    window.removeEventListener('resize');
                } */
    }, [])

    useEffect(() => {
        moviesLengthMore();
    }, [isMoreMovies])

    function handleMoreClick() {
        if (window.innerWidth === MOBILE_VIEW) {
           return  moviesView + 2;
        }
        if (window.innerWidth === PAD_VIEW) {
            return moviesView + 2;
        }
        if (window.innerWidth === DESKTOP_VIEW) {
            return moviesView + 3;
        }
    }

    function moviesLengthMore() {
        console.log(movies.slice(moviesView, 100).length);
        if (movies.slice(moviesView, 100).length === 0) {
            setIsMoreMovies(false);
        } else {
            setIsMoreMovies(true);
        }
    }
    /* console.log(moviesView); */
    return (
        <>
            <section className='movies-list'>
                <ul className='movies-list__container'>
                    {movies.slice(0, moviesView).map((movie) => (
                        <MoviesCard movie={movie}
                            key={movie.id}>
                        </MoviesCard>
                    ))}
                </ul>
            </section>
            <MoviesCardListMore handleMoreClick={handleMoreClick}
                isMoreMovies={isMoreMovies} />
        </>
    )
}
export default MoviesCardList;