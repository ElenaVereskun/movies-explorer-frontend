import React from 'react';
import AboutProjectTitle from '../AboutProjectTitle/AboutProjectTitle';


function AboutMe() {
    return (
        <section className='about-me'>
            <AboutProjectTitle titleText={'Студент'} />
            <div className='about-me__student'>                
                <div className='about-me__info'>
                    <h2 className='about-me__title'>Елена</h2>
                    <p className='about-me__subtitle'>Фронтенд-разработчик, 36 лет</p>
                    <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку,
                        а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур».
                        После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className='about-me__link'>Github</p>
                </div>
                <img src='' alt='фото'/>
            </div>
            <h2 className='about-me__portfolio'>Портфолио</h2>
            <div className='about-me__website'>
                <p className='about-me__web'>Статичный сайт</p>
                <img src='' alt='стрелка' />
            </div>
            <div className='about-me__website'>
                <p className='about-me__web'>Адаптивный сайт</p>
                <img src='' alt='стрелка' />
            </div>
            <div className='about-me__website'>
                <p className='about-me__web'>Одностраничное приложение</p>
                <img src='' alt='стрелка' />
            </div>
        </section>
    )
}
export default AboutMe;