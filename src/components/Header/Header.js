import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
    return (
        <header className="header">
            <div className='header__container'>
                <Link to="/" className='header__logo'>
                    <img src={logo} alt='логотип' />
                </Link>
                <Navigation isLoggedIn={isLoggedIn} />
            </div>
        </header>
    )
}
export default Header;