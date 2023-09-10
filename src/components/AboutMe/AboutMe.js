import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';
import arrow from '../../images/about-me-arrow.svg';
import photo from '../../images/photoDiploma.jpeg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <AboutProjectTitle titleText={'Студент'} />
                <div className='about-me__student'>
                    <div className='about-me__info'>
                        <h2 className='about-me__title'>Елена</h2>
                        <p className='about-me__subtitle'>Фронтенд-разработчик, 36 лет</p>
                        <p className='about-me__text'>Я живу в Москве. У меня есть муж, трое детей,
                            собака и попугай. Я люблю путешествовать, как заграницу, так и по России.
                            Высшее образование у меня инженерное, но, к сожалению, в очень узкой области, и не очень востребованной.
                            Возник вопрос смены днятельности.Я пробовала себя в разных профессиях, занималась дизайном интерьеров.
                            Заинтересовало программирование.После прохождения курса Практикума хотела бы найти работу в web-разработке. </p>
                        <a href='https://github.com/ElenaVereskun' target="_blank" rel="noopener noreferrer" className='about-me__link'>Github</a>
                    </div>
                    <img className='about-me__photo' src={photo} alt='фото' />
                </div>
                <h2 className='about-me__elements'>Портфолио</h2>
                <a href='https://github.com/ElenaVereskun/how-to-learn' target="_blank" rel="noopener noreferrer" className='about-me__element'>
                    <p className='about-me__item'>Статичный сайт</p>
                    <img className='about-me__arrow' src={arrow} alt='стрелка' />
                </a>
                <a href='https://elenavereskun.github.io/russian-travel/' target="_blank" rel="noopener noreferrer" className='about-me__element'>
                    <p className='about-me__item'>Адаптивный сайт</p>
                    <img className='about-me__arrow' src={arrow} alt='стрелка' />
                </a>
                <a href='https://mesto.vereskun.nomoreparties.co' target="_blank" rel="noopener noreferrer" className='about-me__element'>
                    <p className='about-me__item'>Одностраничное приложение</p>
                    <img className='about-me__arrow' src={arrow} alt='стрелка' />
                </a>
            </div>
        </section>
    )
}
export default AboutMe;