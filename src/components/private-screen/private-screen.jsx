import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getUser} from '../../store/selectors';

function PrivateScreen() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    localStorage.removeItem('user');
  };
  return (
    <div className="container">
      <h1>{user}</h1>
      <button
        className="button"
        onClick={handleClick}
      >Logout</button>
    </div>
  );
}

export default PrivateScreen;
