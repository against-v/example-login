import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './assets/styles/main.scss';
import App from './components/app/app';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import {redirect} from './store/middlewares/redirect';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';

const store = createStore(reducer, applyMiddleware(thunk, redirect));

if (localStorage.getItem('token')) {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
