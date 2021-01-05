import React, { Component } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { authAction } from '../../../store/auth/authAction';
import './forget-password.scss';

class Forget extends Component {

  render() {
    return (
      <div className='login__wrapper'>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <h3 className="text-center pb-4">Forget Password</h3>
                  <Formik
                    initialValues={{ email: '' }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = 'Email is required';
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
                        <Row>
                          <Col className="form-group">
                            <Field type='email' name='email' className="form-control" placeholder="Email"/>
                            <ErrorMessage name='email' component='div' className="text-danger"  />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={{ span: 4, offset: 4 }} className="text-center">
                            <Button className="mb-2" type='submit' disabled={isSubmitting}>
                              Submit
                            </Button>
                          </Col>
                          <Col md={{ span: 4, offset: 4 }} className="text-center">
                            <Button className="mb-2 forget-password__login">
                              <Link to='/login'>
                                Login
                              </Link>
                            </Button>
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
    this.props.forgetPassword(payload);
  }

}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forgetPassword: (payload) => dispatch(authAction.forgetPasswordRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forget);
