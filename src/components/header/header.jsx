import React, { Component } from 'react';

import { Navbar, NavDropdown } from 'react-bootstrap';
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
    setTimeout(() => {
      const searchKeyword = e ? e.target.value.toLowerCase() : '';
      console.log({ searchKeyword });
      return this.props.searchProduct(searchKeyword);
    }, 3000);
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
              <Formik>
                {({}) => (
                  <Form>
                    <Field
                      type='text'
                      name='search'
                      placeholder='Search'
                      className='form-control'
                      aria-describedby='search-input'
                      onChange={(e) => this.searchByKeyword(e)}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          ) : null}

          <div className='d-flex justify-content-between align-items-center'>
            {cart.length > 0 ? (
              <div className='header__cart'>
                <Link to='/cart'>
                  <span className='header__cart-icon'>
                    <FaShoppingCart />
                  </span>
                  <span className='header__cart-item'>{cart.length}</span>
                </Link>
              </div>
            ) : null}
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
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (payload) => dispatch(authAction.signoutRequest(payload)),
    search: (payload) => dispatch(productAction.filterProduct(payload)),
    removeFilter: () => dispatch(productAction.removeFilterFromProducts()),
    getCart: () => dispatch(cartAction.getCart()),
    searchProduct: (searchKeyword) =>
      dispatch(productAction.searchProductByKeyword(searchKeyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
