import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import {redirect} from './store/middlewares/redirect';

const store = createStore(reducer, applyMiddleware(thunk, redirect));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
