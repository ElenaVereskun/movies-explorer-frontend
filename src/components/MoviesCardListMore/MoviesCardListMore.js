import React from 'react';

function MoviesCardListMore({ handleMoreClick }) {
    return (
        <section className='movies-more'>
            <div className='movies-more__container'
                onClick={handleMoreClick}>
                <button className='movies-more__button' >Ещё</button>
            </div>
        </section>
    )
}
export default MoviesCardListMore;
