import React from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import LOGO_PNG from '../../assets/img/logo/logo.png';
import LOGO_WEBP from '../../assets/img/logo/logo.webp';

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // dispatch(login());
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div className="login-form__logo">
        <picture>
          <img src={LOGO_PNG}/>
        </picture>
      </div>
      <fieldset className="login-form__fieldset">
        <legend className="login-form__title">Sign in</legend>
        <ul className="login-form__list">
          <li className="login-form__item form-item">
            <label htmlFor="email" className="form-item__label">Email</label>
            <div className="form-item__input-container">
              <input
                id="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
            </div>
          </li>
          <li className="login-form__item form-item">
            <label htmlFor="password" className="form-item__label">Password</label>
            <div className="form-item__input-container">
              <input
                id="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <button>show</button>
            </div>
          </li>
          <li className="login-form__item form-item">
            <button>Login</button>
          </li>
        </ul>
      </fieldset>

    </form>
  );
}
export default LoginForm;
