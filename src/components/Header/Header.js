import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
    const { isLoggin } = false;
    return (
        <header className="header">
            <Link to="/" className='header__logo'>
                <img src={logo} alt='логотип' />
            </Link>
            <Navigation isLoggin={isLoggin} />
        </header>
    )
}
export default Header;