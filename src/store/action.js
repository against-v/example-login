export const ActionType = {
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  LOGOUT: 'logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
};

export const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

