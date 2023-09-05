import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../images/account.svg';
import menu from '../../images/burger-menu.svg';

function Navigation() {
    function openMenu() {

    }
    return (
        <div className='navigation'>
            <div className='navigation__container'>
                <div className='navigation__items'>
                    <Link to="/movies" className='navigation__movies'>Фильмы</Link>
                    <Link to="/saved-movies" className='navigation__save-movies'>Сохраненные фильмы</Link>
                    <Link to="/profile" className='navigation__account'>Аккаунт
                        <img className='navigation__account-img' src={account} alt='аккаунт' />
                    </Link>
                </div>
                <button className='navigation__menu'>
                    <img src={menu} alt='меню' onClick={openMenu} />
                </button>
                <button className="navigation__button">Вход</button>
            </div>
        </div>
    )
}
export default Navigation;
