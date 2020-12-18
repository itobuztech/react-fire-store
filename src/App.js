import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import routes from './route';

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          duration={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
        <Router>
          {routes}
        </Router>
      </div>
    );
  }
}

export default App;
