import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const login = () => (dispatch, _getState) => {
  setTimeout(() => {
    // dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.redirectToRoute(AppRoute.PRIVATE));
  }, 100);
};

export const logout = () => (dispatch, _getState) => {
  setTimeout(() => {
    dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
  }, 100);
};
