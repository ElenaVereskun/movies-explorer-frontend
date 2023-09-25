import { React, useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi';

function MoviesCard({ movie }) {
    const [savedMovies, setSavedMovies] = useState([]);
    /* const [isSaved, setIsSaved] = useState(false); */
    const [isLike, setIsLike] = useState(false);

    /*  console.log(savedMovies); */

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
        id,
    } = movie;

    const currentUser = useContext(CurrentUserContext);
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    /* function handleSaveClick() {
           if (!isSaved) {
               setISaved(true);
           } else {
               setISaved(false);
           }
       } */

    const savedButtonClassName = (
        `movies-card__button-save ${isLike && 'movies-card__button-save_active'}`
    )

    /*     console.log(movie);//карточка по которой кликаю
        console.log(movie.movieId);//underfind
        console.log(movie.id);//порядковый номер
    
     */
    function handleSavedClick() {
        console.log(movie);
        console.log({ movie });
        const isClicked = savedMovies.some((item) => item.id === movie.movieId);
        if (!isClicked) {
            mainApi.savedMovie({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co + ${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co + ${movie.image.formats.thumbmail.url}`,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                movieId: movie.id,
            })
                .then((newSavedMovie) => {
                    setSavedMovies([...savedMovies, newSavedMovie]);
                    setIsLike(true);
                })
        } else {
            mainApi.removeMovie(movie)
                .then((newMovie) => {
                    savedMovies.filter((c) => c.id !== newMovie.id);
                    setSavedMovies(newMovie);
                });
        }
    }

    return (
        <li className='movies-card'>
            <div className='movies-card__heading'>
                <h2 className='movies-card__title'>{nameRU}</h2>
                <p className='movies-card__time'>{hours}ч{minutes}мин</p>
            </div>
            <a href={trailerLink} className='movies-card__link'
                target="_blank" rel="noopener noreferrer">
                <img src={`https://api.nomoreparties.co${image.url}`}
                    className='movies-card__item'
                    alt={nameRU} />
            </a>
            <button className={savedButtonClassName}
                onClick={handleSavedClick}></button>
        </li>
    )
}
export default MoviesCard;