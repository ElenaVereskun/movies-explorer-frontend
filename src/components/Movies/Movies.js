import { React, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';

function Movies({ setIsLoggedIn }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        moviesApi.getMovies(token)
            .then((movies) => {
                setMovies(movies);
                setIsLoggedIn(true);
            })
            .catch((err) => console.log(`Ошибка загрузки данных профиля: ${err}`))
    }, []);

    /*    const evenOnly = movies.filter((movie) => {
           return movie.nameRU.search("ц");
       })
       console.log(evenOnly); */

    /*     const [seachMovies, setSeachMovies] = useState('');
    
        function handleChangeMovies(e) {
            setSeachMovies(e.target.value);
        }
        useEffect(() => {
            setSeachMovies('');
        }, []); */

    /*  function onClickSearch() {
         movies.filter((movie) => {
            return console.log(movie.nameRU);
         })
     }
     function handleSubmit() {
 
     } */

    return (
        <div className='movies'>
            <Header setIsLoggedIn={setIsLoggedIn} />
            <main>
                <SearchForm />
                <MoviesCardList movies={movies} />
                <MoviesCardListMore />
            </main>
            <Footer />
        </div>
    )
}
export default Movies;