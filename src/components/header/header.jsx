import React, { Component } from 'react';

import { Navbar, NavDropdown, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { FaShoppingCart } from 'react-icons/fa';

import { authAction } from '../../store/auth/authAction';
import { productAction } from '../../store/products/prodctsAction';
import { cartAction } from '../../store/cart/cartAction';
import './header.scss';

class Header extends Component {

  componentDidMount() {
    this.props.getCart();
  }

  logOut = () => {
    return this.props.signOut(this.props);
  };

  resetSearchForm = () => {
    this.props.removeFilter();
  };

  searchByKeyword = (e) => {
    console.log('v', e.target.value);
  };

  render() {
    const { search, searchBox, cart } = this.props;
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-fire-cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          {searchBox === true ? (
            <div className='header__search'>
              <Formik
                initialValues={{
                  search: '',
                }}
                onSubmit={(values, { setSubmitting, reset }) => {
                  search(values.search);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, resetForm }) => (
                  <Form>
                    <InputGroup className='mb-3'>
                      <Field
                        type='text'
                        name='search'
                        placeholder='Search'
                        className='form-control'
                        aria-describedby='search-input'
                        onChange={(e) => this.searchByKeyword(e)}
                      />
                      <InputGroup.Append>
                        <InputGroup.Text
                          id='search-input'
                          className='header__clear-search'
                        >
                          &#10060;
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                    <Button
                      className='header__submit-btn'
                      variant='outline-success'
                      type='submit'
                    >
                      Search
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          ) : null}

          <div className="d-flex justify-content-between align-items-center">
            { cart.length > 0 ?
              <div className="header__cart">
                <Link to='/cart'>
                  <span className="header__cart-icon">
                    <FaShoppingCart />
                  </span>
                  <span className="header__cart-item">{ cart.length }</span>
                </Link>
              </div>
              : null
            }
            <div>
              <NavDropdown
                alignRight
                title={'Hi'}
                id='basic-nav-dropdown'
                className='header__dropdown'
              >
                <p>
                  <Link to='/dashboard'>Dashboard</Link>
                </p>
                <p>
                  <Link to='/home'>Home</Link>
                </p>
                <p onClick={() => this.logOut()}>Sign out</p>
              </NavDropdown>
            </div>
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
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (payload) => dispatch(authAction.signoutRequest(payload)),
    search: (payload) => dispatch(productAction.filterProduct(payload)),
    removeFilter: () => dispatch(productAction.removeFilterFromProducts()),
    getCart: () => dispatch(cartAction.getCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
