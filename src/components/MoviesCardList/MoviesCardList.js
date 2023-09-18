import { React } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}) {


    
    return (
        <section className='movies-list'>
            <ul className='movies-list__container'>
                {movies.map((movie) => (
                    <MoviesCard movie={movie}
                    key={movie._id}>
                    </MoviesCard>
                ))}
            </ul>
        </section>
    )
}
export default MoviesCardList;