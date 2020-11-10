import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.jsx";
import Notfound from "./pages/notfound/notfound.jsx";

const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Login} />
    <Route component={Notfound} />
  </Switch>
);

export default routes;
