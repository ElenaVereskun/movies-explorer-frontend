import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt='логотип' />
            <Navigation register={'Регистрация'} buttonText={'Войти'} />
        </header>
    )
}
export default Header;