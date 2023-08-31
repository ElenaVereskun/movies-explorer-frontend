import React from 'react';
/* import account from '../../images/account.svg'; */

function Navigation({ register, buttonText, movies, saveMovies }) {
    return (
        <div className='navigation'>
            <div className='navigation__container'>
                <div className='navigation__items'>
                    <p className='navigation__register'>{register}</p>
                    <p className='navigation__movies'>{movies}</p>
                    <p className='navigation__save-movies'>{saveMovies}</p>
                </div>
                <button className="navigation__button">
                    <div className="navigation__enter">{buttonText}</div>
                    {/* <img className='navigation__account' src={account} alt='аккаунт' /> */}
                </button>
            </div>
        </div>
    )
}
export default Navigation;
