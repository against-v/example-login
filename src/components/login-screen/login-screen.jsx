import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import LoginForm from '../login-form/login-form';
import {getIsAuthorized} from '../../store/selectors';
import {AppRoute} from '../../const';

function LoginScreen() {
  const isAuthorized = useSelector(getIsAuthorized);

  if (isAuthorized) {
    return (
      <Redirect to={AppRoute.ROOT}/>
    );
  }

  return (
    <div className="login-screen container">
      <section className="login-screen__form-container">
        <LoginForm/>
      </section>
    </div>

  );
}

export default LoginScreen;
