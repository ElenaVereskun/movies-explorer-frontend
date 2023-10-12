import { React, useEffect } from 'react';
function MoviesCard({ onMovieSave, onMovieDelete, movie, isLike, isSaved, onLikeClick }) {
    const {
        country,
        description,
        director,
        duration,
        image,
        id,
        nameEN,
        nameRU,
        thumbnail,
        trailerLink,
        year,
    } = movie;

    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    function handleSavedClick() {
        onMovieSave(movie);
    }
    function handleDeleteMovie() {
        onMovieDelete(movie);
    }
    function handleLikeMovie() {
        onLikeClick(movie);
    }
    const savedButtonClassName = (
        `movies-card__button-save ${isLike && 'movies-card__button-save_active'}`
    )


    return (
        <li className='movies-card'>
            <div className='movies-card__heading'>
                <h2 className='movies-card__title'>{nameRU}</h2>
                <p className='movies-card__time'>{hours}ч{minutes}мин</p>
            </div>
            {isSaved
                ? <a href={trailerLink} className='movies-card__link'
                    target="_blank" rel="noopener noreferrer">
                    <img src={image} className='movies-card__item'
                        alt={nameRU} />
                </a>
                : <a href={trailerLink} className='movies-card__link'
                    target="_blank" rel="noopener noreferrer">
                    <img src={`https://api.nomoreparties.co${image.url}`}
                        className='movies-card__item'
                        alt={nameRU} />
                </a>
            }
            {isSaved
                ? <button className='movies-card__button-remove'
                    onClick={handleDeleteMovie}></button>
                : <button className={savedButtonClassName}
                    onChange={handleLikeMovie}
                    onClick={handleSavedClick}></button>
            }
        </li>
    )
}
export default MoviesCard;