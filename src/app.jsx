import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import { startSetExpenses } from './actions/expenses.jsx';
import { login, logout } from './actions/auth.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { firebase } from './firebase/firebase.js';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
  ReactDOM.render(jsx, document.getElementById('app'));
  hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
    });  
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
