import React, { Component } from 'react';

import { Navbar, NavDropdown, Nav, FormControl, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authAction } from '../../store/auth/authAction';
import './header.scss';

class Header extends Component {
  logOut = () => {
    return this.props.signOut(this.props);
  };

  render() {
    const { searchClicked } = this.props;
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-fire-cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <div className="header__search">
            <Form inline>
              <FormControl type="text" placeholder="Search products" className="mr-sm-2" onChange={(event) => searchClicked(event)} />
              <Button variant="outline-success" onClick={searchClicked}>Search</Button>
            </Form>
          </div>
          <div>
            <NavDropdown title={'Hi'} id='basic-nav-dropdown'>
              <p>
                <Link to='/dashboard'>Dashboard</Link>
              </p>
              <p onClick={() => this.logOut()}>Sign out</p>
            </NavDropdown>
          </div>
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
