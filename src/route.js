import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Login from "./pages/login/login.jsx";
import Notfound from "./pages/notfound/notfound.jsx";
import Cart from "./pages/cart/cart.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import List from "./pages/list/list.jsx";
import AuthRoute from './components/auth-route.jsx';

const HomePage = React.lazy(() => import('./pages/home/home.jsx'));
export const history = createBrowserHistory();

const routes = (
  <Suspense fallback={<div>Loading...</div>}>
  <Switch>
    <AuthRoute path="/login" type="guest">
      <Login path="/login" />
    </AuthRoute>
    <AuthRoute path="/register" type="guest">
      <Login path="/register" />
    </AuthRoute>
    <AuthRoute path="/home" type="private">
      <HomePage />
    </AuthRoute>
    <AuthRoute path="/cart" type="private">
      <Cart />
    </AuthRoute>
    <AuthRoute path="/dashboard" type="private">
      <Dashboard path="/dashboard" />
    </AuthRoute>
    <AuthRoute path="/list" type="private">
      <List path="/list" />
    </AuthRoute>
    <Route exact
      path="/"
      render={() => {
          return (
            <Redirect to="/home" />
          )
      }}>

    </Route>


    <Route component={Notfound} />
  </Switch>
  </Suspense>
);


export function redirectTo(location) {
  return history.go(location);
}

export default routes;
