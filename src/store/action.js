export const ActionType = {
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  SET_USER: 'setUser',
  SET_FORM_IS_LOADING: 'setFormIsLoading',
};

export const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
  setFormIsLoading: (user) => ({
    type: ActionType.SET_FORM_IS_LOADING,
    payload: user,
  }),
};

