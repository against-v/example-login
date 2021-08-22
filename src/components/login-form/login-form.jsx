import React from 'react';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import LOGO_PNG from '../../assets/img/logo/logo.png';
import LOGO_WEBP from '../../assets/img/logo/logo.webp';
import {getFormIsLoading} from '../../store/selectors';

function LoginForm() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const isLoading = useSelector(getFormIsLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div className="login-form__logo-container">
        <picture>
          <source srcSet={LOGO_WEBP} type="image/webp"/>
          <img
            className="login-form__logo"
            src={LOGO_PNG}
            alt="Logo"
            width="100"
          />
        </picture>
      </div>
      <fieldset className="login-form__fieldset">
        <legend className="login-form__title">Sign in</legend>
        <ul className="login-form__list">
          <li className="login-form__item form-item">
            <div className="form-item__label-container">
              <label htmlFor="email" className="form-item__label">Email</label>
            </div>
            <input
              ref={emailRef}
              id="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              tabIndex="1"
            />
          </li>
          <li className="login-form__item form-item">
            <div className="form-item__label-container">
              <label htmlFor="password" className="form-item__label">Password</label>
              <a
                href="#forgot-password"
                className="form-item__link"
                tabIndex="2">
                Forgot password?
              </a>
            </div>
            <input
              ref={passwordRef}
              id="password"
              type="password"
              className="input"
              placeholder="Password"
              required
              tabIndex="1"
            />
          </li>
          <li className="login-form__item form-item">
            <button
              disabled={isLoading}
              className={`button button_full ${isLoading ? 'button_loading' : ''}`}
              tabIndex="1">
              Sign in
            </button>
          </li>
        </ul>
      </fieldset>

    </form>
  );
}
export default LoginForm;
