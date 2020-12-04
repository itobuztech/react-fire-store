import React from "react";

import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Login from "./pages/login/login.jsx";
import Notfound from "./pages/notfound/notfound.jsx";
import Home from "./pages/home/home.jsx";
import Cart from "./pages/cart/cart.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import List from "./pages/list/list.jsx";
import AuthRoute from './components/auth-route.jsx';

export const history = createBrowserHistory();

const routes = (
  <Switch>
    <AuthRoute path="/login" type="guest">
      <Login path="/login" />
    </AuthRoute>
    <AuthRoute path="/register" type="guest">
      <Login path="/register" />
    </AuthRoute>
    <AuthRoute path="/home" type="private">
      <Home />
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
    <Route component={Notfound} />
  </Switch>
);


export function redirectTo(location) {
  return history.go(location);
}

export default routes;
