import { React, useState } from 'react';
import logo from '../../images/logo.svg';
import { useNavigate, Link } from "react-router-dom";
import * as mainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../useForm/useForm';

function Register({ onRegister }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [isFormError, setIsFormError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const { name, email, password } = values;
        mainApi.register({ name, email, password })
            .then((data) => {
                localStorage.setItem(data.name, data.email, data.password);
                onRegister(true);
            })
            .then(() => {
                mainApi.authorize({ email, password })
                    .then((data) => {
                        localStorage.setItem('jwt', data.token);
                    })
            })
            .then(() => navigate("/movies"))
            .catch((err) => setIsFormError('Пользователь уже зарегистрирован'))
    }
    const navigate = useNavigate();
    function handleEnter() {
        navigate("/signin");
    }
    return (
        <section className='register'>
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__container">
                    <div className='register__header'>
                        <Link to="/" className='register__logo'>
                            <img src={logo} alt='логотип' />
                        </Link>
                        <h2 className="register__title">Добро пожаловать!</h2>
                    </div>
                    <div className="register__input-container">
                        <p className="register__title-name">Имя</p>
                        <input className="register__name"
                            value={values.name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            pattern="^[a-zA-Z0-9\.\-]+[а-яёА-ЯЁ0-9\"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    <span className="register__name-error">{errors.name}</span>
                    <div className="register__input-container">
                        <p className="register__title-email">E-mail</p>
                        <input className="register__email"
                            value={values.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    <span className="register__email-error">{errors.email}</span>
                    <div className="register__input-container" style={{ marginBottom: '10px' }}>
                        <p className="register__title-password">Пароль</p>
                        <input className="register__password"
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                            rel="to-replace"
                            name="password"
                            placeholder="password"
                            minLength={6}
                            maxLength={20}
                            required />
                    </div>
                    <span className="register__password-error">{errors.password}</span>
                    <div className="register__button-container">
                        <span className="register__form-error">{isFormError}</span>
                        <button className="register__button-register"
                            onClick={onRegister} disabled={!isValid}>Зарегистрироваться</button>
                    </div>
                </div>
                <div className='register__enter'>
                    <p className='register__enter-text'>Уже зарегистрированы?</p>
                    <button className="register__button-enter" onClick={handleEnter}>Войти</button>
                </div>
            </form>
        </section>
    )
}
export default Register;
