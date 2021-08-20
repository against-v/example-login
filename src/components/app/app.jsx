import React from 'react';
import {
  Router as BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import PrivateScreen from '../private-screen/private-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute} from '../../const';

function App() {

  return (
    <BrowserRouter
      history={browserHistory}
    >
      <Switch>
        <Route
          exact
          path={AppRoute.LOGIN}
        >
          <LoginScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ROOT}
          render={() => (
            <PrivateScreen/>
          )}>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
