import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import { authAction } from '../../store/auth/authAction';
import { RegisterOrLogin } from '../../components/register-or-login';
import './login.scss';

class Login extends Component {

  render() {
    const { path } = this.props;
    console.log('props', this.props);

    return (
      <div className='login__wrapper'>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <h2 className="text-center">{ path === '/register' ? 'Register' : 'Login' }</h2>
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
      this.props.login(payload, this.props);
    }
  }

}

const mapStateToProps = (state) => {
  console.log({state});
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
    login: (payload, props) => dispatch(authAction.loginRequest(payload, props)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
