import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <Link to="/" className='header__logo'>
                <img src={logo} alt='логотип' />
            </Link>
            <Navigation />
        </header>
    )
}
export default Header;