import { React } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <div className='saved-movies'>
            <Header register={'Register'} />
            <main>
                <SearchForm />
                <MoviesCardList />
                <div className='saved-movies__black-square'></div>
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies;