import { nanoid } from 'nanoid';
import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from '../const';

export const login = () => (dispatch, _getState) => {
  setTimeout(() => {
    localStorage.setItem('token', nanoid(8));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT));
  }, 100);
};
