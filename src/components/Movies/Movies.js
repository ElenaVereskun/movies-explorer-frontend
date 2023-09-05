import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';
import Footer from '../Footer/Footer';
import account from '../../images/account.svg';
function Movies() {
    return (
        <div className='movies'>
            <Header movies={'Фильмы'} 
            saveMovies={'Сохраненные фильмы'} 
            register={'Аккаунт'} 
            account={account}
            />
            <SearchForm />
            <MoviesCardList />
            <MoviesCardListMore />
            <Footer />
        </div>
    )
}
export default Movies;