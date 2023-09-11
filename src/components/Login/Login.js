import { React } from 'react';
import { useNavigate, Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Login(props) {

    const navigate = useNavigate();

    function handleRegister() {
        navigate("/signup");
    }
    return (
        <section className='login'>
            <form className="login__form">
                <div className="login__container">
                    <Link to="/" className='login__logo'>
                        <img src={logo} alt='логотип' />
                    </Link>
                    <h2 className="login__title">Рады видеть!</h2>
                    <div className="login__input-container">
                        <p className="login__title-email">E-mail</p>
                        <input value={props.email} className="login__email"
                            type="text" name="email" placeholder="Email" required />
                    </div>
                    <div className="login__input-container" style={{ marginBottom: '10px' }}>
                        <p className="login__title-password">Пароль</p>
                        <input value={props.email} className="login__password"
                            type="password" rel="to-replace" name="password" placeholder="password" minLength={2} maxLength={30} required />
                    </div>
                    <button className="login__button-login">Войти</button>
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