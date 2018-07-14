import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import LoginPage from '../components/LoginPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

export const history = createHistory(); 

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />

      </Switch>
    </div>
  </Router>
);

export default AppRouter;
