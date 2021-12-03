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
// import 'bootstrap/dist/css/bootstrap.css';
// import "bootswatch/dist/litera/bootstrap.min.css";
// import 'font-awesome/css/font-awesome.css';
// import * as serviceWorker from './serviceWorker';
import user from './reducers/user/';
import reservation from './reducers/reservation/';
import userRoutes from './routes/user';
import LoginPage from './components/LoginPage';
import loginReducer from './reducers/loginReducer';
import Navbar from './components/Navbar';


const history = createBrowserHistory();
export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    loginReducer,
    user,
    reservation,
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

