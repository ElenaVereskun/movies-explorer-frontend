import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ movies, saveMovies,register,buttonText,account }) {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt='логотип' />
            <Navigation register={register} 
            movies={movies} 
            saveMovies={saveMovies} 
            buttonText={buttonText} 
            account={account}/>
        </header>
    )
}
export default Header;