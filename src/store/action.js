export const ActionType = {
  REQUIRE_AUTHORIZATION: 'requireAuthorization',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
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
};

