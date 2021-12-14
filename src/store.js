import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';

import user from './reducers/user/';
import reservation from './reducers/reservation/';
import equipment from './reducers/equipment/';
import share from './reducers/share/'
import rentaltype from './reducers/rentaltype/'
import loginReducer from './reducers/loginReducer';



const history = createBrowserHistory();
export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    loginReducer,
    user,
    reservation,
    equipment,
    share,
    rentaltype
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

