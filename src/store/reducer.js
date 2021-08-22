import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  user: localStorage.getItem('user') || '',
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  formIsLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.SET_FORM_IS_LOADING:
      return {
        ...state,
        formIsLoading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
