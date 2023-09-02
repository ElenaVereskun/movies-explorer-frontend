import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className='movies-list'>
            <div className='movies-list__container'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className='movies__more'>
                <button className='movies__button-more'>Ещё</button>
            </div>
        </section>
    )
}
export default MoviesCardList;