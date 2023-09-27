import { React, useState, useEffect } from 'react';
import * as mainApi from '../../utils/MainApi';

function MoviesCard({ movie/* ,savedMovies, setSavedMovies */ }) {
   const [savedMovies, setSavedMovies] = useState([]);
    const [isLike, setIsLike] = useState(false);
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
    const savedButtonClassName = (
        `movies-card__button-save ${isLike && 'movies-card__button-save_active'}`
    )
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    function handleSavedClick() {
        const isClicked = savedMovies.some((item) => item.id === movie.id);
        if (!isClicked) {
            saveMovie(movie);
        } else {
            deleteMovie();
        }
    }
    function saveMovie(movie) {
        mainApi.savedMovie(movie = {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailerLink: movie.trailerLink,
            thumbnail: movie.image.formats.thumbnail,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            movieId: movie.id,
        })
            .then((newSavedMovie) => {
                setSavedMovies([savedMovies.push(newSavedMovie)]);
                setIsLike(true);
                console.log(savedMovies);
            })
    }

    function deleteMovie() {
        mainApi.removeMovie( movie )
            .then((deleteMovie) => {
                savedMovies.filter((c) => c.id !== deleteMovie.id);
                setSavedMovies(deleteMovie);
                setIsLike(false);
            });
    }
/* 
    useEffect(() => {
        mainApi.getMovies()
            .then((savedMovies) => {
                setSavedMovies(savedMovies);
            })
            .catch((err) => console.log(`${err}`))
    }, []);
 */
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