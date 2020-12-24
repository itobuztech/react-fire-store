import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container, Button, Table } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';

import { cartAction } from '../../store/cart/cartAction';
import './cart.scss';

const stripePromise = loadStripe("pk_test_p5TXTelJGPHS1LUL0p4nOR4u00BZCvfRqHpk_test_51I1oJsKm7cLBUuXQuUdBYKYIPnIqvEtPIWixGqnu3O3ZT54ogiMuh08VqB7tSDTobOMzPIvZkFaoDSLzvMXwEhCH00Mxdtswkh");

class Cart extends Component {

  state = {
    total: 0
  };

  componentDidMount() {
    this.props.getCart();
    this.calculateTotal();
  };

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.calculateTotal();
    }
  };

  changeQuantity = (type, product) => {
    this.props.changeQuantity({ type, product });
    this.calculateTotal();
  };

  calculateTotal = () => {
    const cartData = this.props.cart;
    const price = cartData.map(el => el.price*el.quantity);
    const total = price.reduce((ac, cr) => ac + cr, 0);
    this.setState({total});
  };

  render() {
    const { cart, deleteFromCart } = this.props;
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={product.image}
                      className='img-fluid cart--product-image'
                      alt='product image'
                    />
                  </td>
                  <td>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button
                        onClick={() => this.changeQuantity('inc', product)}
                      >
                        <FaPlus />
                      </Button>
                      {product.quantity}
                      <Button
                        disabled={product.quantity <= 0}
                        onClick={() => this.changeQuantity('dec', product)}
                      >
                        <FaMinus />
                      </Button>
                    </div>
                  </td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={() => deleteFromCart(product.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="cart__total">
          <div>
            <h5>Total:</h5>
          </div>
          <div>
            <h5>{ this.state.total }</h5>
          </div>
        </div>
        <div className="mt-3 text-right">
          <Button
            variant='primary'
            role="link"
            onClick={handleClick}
          >
            Checkout
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => dispatch(cartAction.getCart()),
    changeQuantity: (payload) => dispatch(cartAction.changeQuantity(payload)),
    deleteFromCart: (id) => dispatch(cartAction.deleteFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const handleClick = async (event) => {
  // Get Stripe.js instance
  const stripe = await stripePromise;

  // Call your backend to create the Checkout Session
  const response = await fetch('http://localhost:4242/secret', { method: 'POST' });

  const session = await response.json();

  // When the customer clicks on the button, redirect them to Checkout.
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  }
};
