import React, { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import { authAction } from '../../store/auth/authAction';
import { RegisterOrLogin } from '../../components/register-or-login';
import './login.scss';

class Login extends Component {
  state = {
    location: '',
  };

  submitForm(payload) {
    if (this.props.location.pathname === '/register') {
      this.props.register(payload);
    } else {
      this.props.login(payload);
    }
  }

  render() {
    const { location } = this.props;

    return (
      <div className='login__wrapper'>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center">{ location.pathname === '/register' ? 'Register' : 'Login' }</h2>
                  <Formik
                    initialValues={{ email: '', password: '' }}
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
                        {location.pathname === '/register' ? (
                          <Row>
                            <Col className="form-group">
                              <Field type='text' name='name' className="form-control" />
                            </Col>
                          </Row>
                        ) : null}
                        <Row>
                          <Col className="form-group">
                            <Field type='email' name='email' className="form-control" />
                            <ErrorMessage name='email' component='div' className="text-danger" />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="form-group">
                            <Field type='password' name='password' className="form-control" />
                            <ErrorMessage name='password' component='div' className="text-danger" />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={{ span: 4, offset: 4 }} className="text-center">
                            <Button type='submit' disabled={isSubmitting}>
                              {location.pathname === '/register'
                                ? 'Register'
                                : 'Submit'}
                            </Button>
                            <RegisterOrLogin
                              pathname={location.pathname}
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
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state.authReducer,
    registerResponse: state.authReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (payload) => dispatch(authAction.registerRequest(payload)),
    login: (payload) => dispatch(authAction.loginRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
