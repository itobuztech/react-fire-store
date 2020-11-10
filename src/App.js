import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';
import routes from './route';

class App extends Component {
  render() {
    return (
      <Router>
        {routes}
      </Router>
    );
  }
}

export default App;
