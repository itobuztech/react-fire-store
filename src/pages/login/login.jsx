import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';

import { authAction } from '../../store/auth/authAction';

class Login extends Component {
    state = {
      location: ''
    };

  componentWillMount() {
    this.historyListener = this.props.history.listen((location, action) => {
      console.log({location});
      console.log({action});
      this.setState({
        location: location.pathname.split('/')[1]
      })
    })
  }

  componentWillUnmount() {
    return this.historyListener;
  }

  submitForm(payload) {
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === '/register') {
      this.props.register(payload);
    } else {
      this.props.login(payload);
    }
    
  }

  render() {
    const { location } = this.state;
    console.log('props', this.props);
    console.log('state', this.state);

    return (
      <div className="login__wrapper">
        <h2>Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log({values});
            console.log({setSubmitting});
            this.submitForm(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Button type="submit" disabled={isSubmitting}>
            { location === 'register' ? 'Register' :  'Submit' }
          </Button>
          <p>
            <Link to="/register">
              register
            </Link>
          </p>
        </Form>
       )}
      </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginResponse: state.authReducer,
    registerResponse: state.authReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    register: (payload) => dispatch(authAction.registerRequest(payload)),
    login: (payload) => dispatch(authAction.loginRequest(payload))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
