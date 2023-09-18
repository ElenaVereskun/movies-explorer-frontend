import { React, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import * as mainApi from '../../utils/MainApi';

function Login({ onLogin }) {

    const navigate = useNavigate();
    const [errorMessage, setErrorMesage] = useState('');

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            setErrorMesage("Не введены email или пароль");
            return;
        }
        mainApi.authorize({ email: formValue.email, password: formValue.password })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token);
                    setFormValue({ email: '', password: '' });
                    /* onLogin(data.token); */
                    navigate('/movies', { replace: true });
                } else {
                    setErrorMesage("Не корректные email или пароль")
                }
            })
            .catch((err) => console.log(`Ошибка логин: ${err}`));
    }

    function handleRegister() {
        navigate("/signup");
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
                        <input value={formValue.email} className="login__email" onChange={handleChange}
                            type="text" name="email" placeholder="Email" required />
                        <span className='login__email-error'></span>
                    </div>
                    <div className="login__input-container" style={{ marginBottom: '10px' }}>
                        <p className="login__title-password">Пароль</p>
                        <input value={formValue.password} className="login__password" onChange={handleChange}
                            type="password" rel="to-replace" name="password" placeholder="password" minLength={2} maxLength={30} required />
                        <span className='login__password-error'>{errorMessage}</span>
                    </div>
                    <button className="login__button-login" onClick={onLogin} >Войти</button>
                </div>
                <div className='login__enter'>
                    <p className='login__enter-text'>Ещё не зарегистрированы?</p>
                    <button className="login__button-enter" onClick={handleRegister}>Регистрация</button>
                </div>
            </form>
        </section>
    )
}
export default Login;




/* const [errorMessage, setErrorMesage] = useState(''); */

