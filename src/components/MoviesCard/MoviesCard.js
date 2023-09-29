import { React, useState, useEffect } from 'react';

function MoviesCard({ onMovieLike, onMovieDelete, movie, isSaved }) {
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
    const [isLike, setIsLike] = useState();

    const savedButtonClassName = (
        `movies-card__button-save ${isLike && 'movies-card__button-save_active'}`
    )
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    function handleSavedClick() {
        onMovieLike(movie);
        if (!isLike) {
            setIsLike(true)
        } else {
            setIsLike(false)
        }
    }
    function handleDeleteMovie() {
        onMovieDelete(movie);
    }

/*     useEffect(() => {
        handleSavedClick()
    }, [])
 */
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
                    onClick={handleSavedClick}></button>}

        </li>
    )
}
export default MoviesCard;