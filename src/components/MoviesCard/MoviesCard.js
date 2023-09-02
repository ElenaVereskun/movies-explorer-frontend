import React from 'react';
import moviesItem from '../../images/pic__COLOR_pic.png';

function MoviesCard() {
    return (
        <div className='movies-card'>
            <div className='movies-card__heading'>
                <h2 className='movies-card__title'>В погоне за Бенкси</h2>
                <p className='movies-card__time'>0ч 42мин</p>
            </div>
            <img src={moviesItem} className='movies-card__item' alt='фильм' />
            <button className='movies-card__button-save'>Сохранить</button>
        </div>
    )
}
export default MoviesCard;