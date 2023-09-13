import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCardListMore from '../MoviesCardListMore/MoviesCardListMore';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <div className='movies'>
            <Header />
            <main>
                <SearchForm />
                <MoviesCardList />
                <MoviesCardListMore />
            </main>
            <Footer />
        </div>
    )
}
export default Movies;