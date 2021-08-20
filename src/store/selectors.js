import {AuthorizationStatus} from '../const';

export const getIsAuthorized = (state) => state.authorizationStatus === AuthorizationStatus.AUTH;
