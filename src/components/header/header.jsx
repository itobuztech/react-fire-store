import React, { Component } from 'react';

import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authAction } from '../../store/auth/authAction';

class Header extends Component {
  logOut = () => {
    return this.props.signOut(this.props);
  };

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-fire-cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <NavDropdown title={'Hi'} id='basic-nav-dropdown'>
            <p>
              <Link to='/dashboard'>Dashboard</Link>
            </p>
            <p onClick={() => this.logOut()}>Sign out</p>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.authReducer.isAuthUser,
    signedOutSuccess: state.authReducer.signedOutSuccess,
    signedOutError: state.authReducer.signedOutError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (payload) => dispatch(authAction.signoutRequest(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
