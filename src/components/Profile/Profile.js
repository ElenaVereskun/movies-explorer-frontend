import React from 'react';
import Header from '../Header/Header';

function Profile(props) {
    return (
        <>
            <div className='profile'>
                <Header />
                <form className="profile__form">
                    <div className="profile__container">
                        <h2 className="profile__title">Привет,{props.textTitle}!</h2>
                        <div className="profile__input-container">
                            <p className="profile__title-name">Имя</p>
                            <input value={props.textTitle} className="profile__name" onChange={props.handleChange}
                                type="text" placeholder="Имя" required />
                        </div>
                        <div className="profile__input-container" style={{ border: 'none' }}>
                            <p className="profile__title-email">E-mail</p>
                            <input value={props.email} className="profile__email" onChange={props.handleChange}
                                type="text" name="email" placeholder="Email" required />
                        </div>
                        <button className="profile__button-edit" onClick={props.onClick}>Редактировать</button>
                        <button className="profile__button-exit" onClick={props.handleEnter}>Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </>

    )
}
export default Profile;
