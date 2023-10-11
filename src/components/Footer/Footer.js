import React from 'react';

function Footer() {
    return (
        <footer className="footer" id='footer'>
            <div className='footer__container'>
                <p className='footer__about'>Учебный проект Яндекс.
                    Практикум х BeatFilm.</p>
                <div className='footer__elements'>
                    <p className='footer__year'>&copy; 2023</p>
                    <div className='footer__items'>
                        <a href='https://practicum.yandex.ru/'
                        target="_blank" rel="noopener noreferrer" 
                        className='footer__item'>Яндекс.Практикум</a>
                        <a href='https://github.com/ElenaVereskun'
                        target="_blank" rel="noopener noreferrer" 
                        className='footer__item'>Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;