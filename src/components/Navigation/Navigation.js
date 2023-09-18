import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import account from '../../images/account.svg';
import menu from '../../images/burger-menu.svg';
import PopupMenu from '../PopupMenu/PopupMenu';

function Navigation({ setIsLoggedIn }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleCloseButton() {
        setIsMenuOpen(false);
    }

    function handleMenuOpen() {
        setIsMenuOpen(true);
    }
    return (
        <>
            <PopupMenu isMenuOpen={isMenuOpen} onClickCloseButton={handleCloseButton} />
            <div className='navigation'>
                <div className='navigation__container'>
                    <div className={setIsLoggedIn ? 'navigation__items_active' : 'navigation__items'}>
                        <Link to="/movies" className='navigation__movies'>Фильмы</Link>
                        <Link to="/saved-movies" className='navigation__save-movies'>Сохранённые фильмы</Link>
                        <Link to="/profile" className='navigation__account'>Аккаунт
                            <img className='navigation__account-img' src={account} alt='аккаунт' />
                        </Link>
                    </div>
                    <button className={setIsLoggedIn ? 'navigation__menu_active' : 'navigation__menu'}>
                        <img className='navigation__menu-img' src={menu} alt='меню' onClick={handleMenuOpen} />
                    </button>
                    <div className={setIsLoggedIn ? 'navigation__enter' : 'navigation__enter_active'}>
                        <Link to="/signup" className='navigation__register'>Регистрация</Link>
                        <Link to="/signin" className="navigation__button">Войти</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigation;
