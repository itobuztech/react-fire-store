import React, { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import { authAction } from '../../store/auth/authAction';
import { RegisterOrLogin } from './register-or-login';
import './login.scss';

class Login extends Component {

  render() {
    const { path } = this.props;

    return (
      <div className='login__wrapper'>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <h3 className="text-center pb-4">{path === '/register' ? 'Register' : 'Login'}</h3>
                  <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = 'Invalid email address';
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      this.submitForm(values);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        {path === '/register' ? (
                          <Row>
                            <Col className="form-group">
                              <Field type='text' name='name' className="form-control" placeholder="Name" />
                            </Col>
                          </Row>
                        ) : null}
                        <Row>
                          <Col className="form-group">
                            <Field type='email' name='email' className="form-control" placeholder="Email"/>
                            <ErrorMessage name='email' component='div' className="text-danger"  />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="form-group">
                            <Field type='password' name='password' className="form-control" placeholder="Password"/>
                            <ErrorMessage name='password' component='div' className="text-danger" />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={{ span: 4, offset: 4 }} className="text-center">
                            <Button className="mb-2" type='submit' disabled={isSubmitting}>
                              {path === '/register'
                                ? 'Register'
                                : 'Submit'}
                            </Button>
                            <RegisterOrLogin
                              pathname={path}
                            ></RegisterOrLogin>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  submitForm(payload) {
    if (this.props.path === '/register') {
      this.props.register(payload);
    } else {
      this.props.login(payload);
    }
  }

}

const mapStateToProps = (state) => {
  return {
    loginError: state.authReducer.loginError,
    registerErr: state.authReducer.registerErr,
    loggedInUser: state.authReducer.loggedInUser,
    registeredUser: state.authReducer.registeredUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (payload) => dispatch(authAction.registerRequest(payload)),
    login: (payload) => dispatch(authAction.loginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
