import React, { Component } from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import routes from './route';
import { CheckoutForm } from './pages/checkout/checkout.jsx';

const stripePromise = loadStripe("pk_test_p5TXTelJGPHS1LUL0p4nOR4u00BZCvfRqHpk_test_51I1oJsKm7cLBUuXQuUdBYKYIPnIqvEtPIWixGqnu3O3ZT54ogiMuh08VqB7tSDTobOMzPIvZkFaoDSLzvMXwEhCH00Mxdtswkh");


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
        <Elements stripe={stripePromise}>
          <Router>
            {routes}
          </Router>
        </Elements>
      </div>
    );
  }
}

export default App;
