import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
function Movies() {
    return (
        <div className='movies'>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    )
}
export default Movies;