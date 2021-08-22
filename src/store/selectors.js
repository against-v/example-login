import {AuthorizationStatus} from '../const';

export const getIsAuthorized = (state) => state.authorizationStatus === AuthorizationStatus.AUTH;
export const getUser = (state) => state.user;
export const getFormIsLoading = (state) => state.formIsLoading;
