import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/litera/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
import { store } from './store';



// import Navbar from './components/Navbar';
// import Welcome from './Welcome';

const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/> 
        </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

