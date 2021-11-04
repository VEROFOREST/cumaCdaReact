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
import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/litera/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css';
// import * as serviceWorker from './serviceWorker';
import user from './reducers/user/';
import userRoutes from './routes/user';
import LoginPage from './components/LoginPage';
import loginReducer from './reducers/loginReducer';

// import Navbar from './components/Navbar';
// import Welcome from './Welcome';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    loginReducer,
    user,
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
        {/* <App /> */}
    <ConnectedRouter history={history}>
      <Switch>
        {userRoutes}
        <Route path="/login" component={LoginPage}/>
        <Route path="/" component={App}/>
       

        {/* Add your routes here */}
        {/* <Route render={() => <h1>Not Found</h1>} /> */}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
