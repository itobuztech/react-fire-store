import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { cartAction } from '../../store/cart/cartAction';
import './cart.scss';

class Cart extends Component {

  // componentDidMount() {
  //   this.props.
  // }
  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <b>Items</b>
          </Col>
          <Col md={6} lg={6}>
            <b>Quantity</b>
          </Col>
        </Row>
        { cart.map((value, index) => {
          return (
            <Row key={index}>
              <Col md={6} lg={6}>
                <img src={value} alt='product image' />
              </Col>
              <Col md={6} lg={6}>
                <div className='d-flex justify-content-between align-items-center'>
                  <Button>
                    <i class='fa fa-plus' aria-hidden='true'></i>
                  </Button>
                  <input type='number' />
                  <Button>
                    <i class='fa fa-minus' aria-hidden='true'></i>
                  </Button>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    addToCartError: state.cartReducer.addToCartError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addToCart: (payload) => dispatch(cartAction.addToCart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
