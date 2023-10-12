import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import * as mainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../useForm/useForm';

function Login({ setIsLoggedIn}) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const navigate = useNavigate();
    const [isFormError, setIsFormError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = values;
        mainApi.authorize({ email, password })
            .then((data) => {
                localStorage.setItem('jwt', data.token);
                setIsLoggedIn(true);
                navigate('/movies', { replace: false });
            })
            .catch((err) => setIsFormError(`Нет пользователя с таким логином и паролем`));
    }

    function handleRegister() {
        navigate("/signup", { replace: false });
    }
    return (
        <section className='login'>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__container">
                    <Link to="/" className='login__logo'>
                        <img src={logo} alt='логотип' />
                    </Link>
                    <h2 className="login__title">Рады видеть!</h2>
                    <div className="login__input-container">
                        <p className="login__title-email">E-mail</p>
                        <input className="login__email"
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
                    <span className='login__email-error'>{errors.email}</span>
                    <div className="login__input-container" style={{ marginBottom: '10px' }}>
                        <p className="login__title-password">Пароль</p>
                        <input className="login__password"
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
                    <span className='login__password-error'>{errors.password}</span>
                    <div className='login__button-container'>
                        <span className="register__form-error">{isFormError}</span>
                        <button className="login__button-login"
                            onClick={setIsLoggedIn}
                            disabled={!isValid}>Войти</button>
                    </div>
                </div>
                <div className='login__enter'>
                    <p className='login__enter-text'>Ещё не зарегистрированы?</p>
                    <button className="login__button-enter"
                        onClick={handleRegister}>Регистрация</button>
                </div>
            </form>
        </section>
    )
}
export default Login;


