import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import PrivateScreen from '../private-screen/private-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute} from '../../const';
// import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';

function App({authorizationStatus}) {
  const handleClick = () => {
    console.log(authorizationStatus);
  };
  console.log('APP');

  return (
    <BrowserRouter
      history={browserHistory}
    >
      <div>app</div>
      <button
        onClick={handleClick}
      >status</button>
      <Switch>
        <Route
          exact
          path={AppRoute.LOGIN}
        >
          <LoginScreen/>
        </Route>
        <Route
          exact
          path={AppRoute.PRIVATE}
        >
          <PrivateScreen/>
        </Route>
        {/*<PrivateRoute*/}
        {/*  exact*/}
        {/*  path={AppRoute.PRIVATE}*/}
        {/*  render={() => (*/}
        {/*    <PrivateScreen/>*/}
        {/*  )}>*/}

        {/*</PrivateRoute>*/}
      </Switch>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps)(App);
