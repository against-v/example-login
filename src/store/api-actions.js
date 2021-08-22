import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const login = (userData) => (dispatch, _getState) => {
  dispatch(ActionCreator.setFormIsLoading(true));
  setTimeout(() => {
    localStorage.setItem('user', userData.email);
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.setUser(userData.email));
    dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
    dispatch(ActionCreator.setFormIsLoading(false));
  }, 500);
};
