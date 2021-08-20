import React from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';

function PrivateScreen() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    localStorage.removeItem('token');
  };
  return (
    <div>
      <div>private screen</div>
      <button
        onClick={handleClick}
      >Logout</button>
    </div>
  );
}

export default PrivateScreen;
