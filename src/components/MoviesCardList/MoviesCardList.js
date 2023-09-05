import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className='movies-list'>
            <div className='movies-list__container'>
                <MoviesCard />
                <MoviesCard />
            </div>
        </section>
    )
}
export default MoviesCardList;