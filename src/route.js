import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Notfound from "./pages/notfound/notfound.jsx";
import Home from "./pages/home/home.jsx";
import AuthRoute from './components/auth-route.jsx';

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
    <Route component={Notfound} />
  </Switch>
);

export default routes;
