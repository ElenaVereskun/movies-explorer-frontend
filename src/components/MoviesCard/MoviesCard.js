import React from 'react';

function MoviesCard({ movie }) {
    const {
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        nameRU,
        nameEN,
    } = movie;


/*     function handleClick() {
        onMovieClick(movie);
      } */
    return (
        <li className='movies-card'>
            <div className='movies-card__heading'>
                <h2 className='movies-card__title'>{nameRU}</h2>
                <p className='movies-card__time'>{duration}мин</p>
            </div>
            <img src={image} className='movies-card__item' alt={nameRU}/>
            <button className='movies-card__button-save'>Сохранить</button>
        </li>
    )
}
export default MoviesCard;