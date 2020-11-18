import React, { Component } from 'react';

import { Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import { authAction } from '../../store/auth/authAction';

class Header extends Component {

  logOut = () => {
    return this.props.signOut(this.props);
  }

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-fire-cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <NavDropdown title={'Hi'} id='basic-nav-dropdown'>
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item onClick={() => this.logOut()}>
              Sign out
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    isAuthUser: state.authReducer.isAuthUser,
    signedOutSuccess: state.authReducer.signedOutSuccess,
    signedOutError: state.authReducer.signedOutError
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log({ dispatch });
  return {
    signOut: (payload) => dispatch(authAction.signoutRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
