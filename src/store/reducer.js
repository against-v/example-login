import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
