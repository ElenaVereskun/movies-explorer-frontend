import { React, useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../useForm/useForm';

function Profile({ isLoggedIn, setIsLoggedIn, onEditProfile }) {
    const currentUser = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [startEdit, setStartEdit] = useState(false);
    const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormWithValidation();

    function onStartEdit() {
        setStartEdit(true);
    }
    function onSignOut() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('localIsShort');
        localStorage.removeItem('localSearchValue');
        navigate('/', { replace: false });
        setIsLoggedIn(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email } = values;
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(!isValid);
        } else {
            onEditProfile({ name, email });
            setIsValid(!isValid);
        }
    };

    useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(false);
        }
    }, [currentUser, values.name, values.email]);

    useEffect(() => {
        setValues(currentUser);
    }, [currentUser]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                navigate('/movies', { replace: false });
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    return (
        <div className='profile'>
            <Header isLoggedIn={isLoggedIn} />
            <div className="profile__container">
                <form className="profile__form" onSubmit={handleSubmit}>
                    <h2 className="profile__title">Привет, {values.name}!</h2>
                    <div className="profile__input-container">
                        <p className="profile__title-name">Имя</p>
                        <input
                            className="profile__name"
                            value={values.name}
                            onChange={handleChange}
                            readOnly={!startEdit}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            pattern="^[a-zA-Z0-9\.\-]+[а-яёА-ЯЁ0-9]\"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    <span className="profile__name-error">{errors.name}</span>
                    <div className="profile__input-container" style={{ border: 'none' }}>
                        <p className="profile__title-email">E-mail</p>
                        <input className="profile__email"
                            value={values.email}
                            onChange={handleChange}
                            readOnly={!startEdit}
                            type="email"
                            name="email"
                            pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
                            minLength={2}
                            maxLength={30}
                            placeholder="Email"
                            required />
                    </div>
                    <span className="profile__email-error">{errors.email}</span>
                    <div className='profile__button-block'>
                        <span className='profile__error'></span>
                        <button className={startEdit ? "profile__button-save" : "profile__button-save_none"}
                            disabled={!isValid}>Сохранить</button>
                    </div>
                </form>
                <button className={startEdit ? "profile__button-edit_none" : "profile__button-edit"}
                    onClick={onStartEdit}>Редактировать</button>
                <button className={startEdit ? "profile__button-exit_none" : "profile__button-exit"}
                    onClick={onSignOut}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}
export default Profile;