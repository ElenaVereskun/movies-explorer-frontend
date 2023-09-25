import React from 'react';

function MoviesCardListMore({handleMoreClick, isMoreMovies}) {
    return (
        <section className='movies-more'>
            <div className={isMoreMovies ? 'movies-more__container' : 'movies-more__container_none'}>
                <button className='movies-more__button' onClick={handleMoreClick}>Ещё</button>
            </div>
        </section>
    )
}
export default MoviesCardListMore;
