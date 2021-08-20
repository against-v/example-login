import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {getIsAuthorized} from '../../store/selectors';


function PrivateRoute(props) {
  const {
    render,
    path,
    exact,
  } = props;

  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        isAuthorized
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
