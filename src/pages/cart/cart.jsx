import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container, Button, Table } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { cartAction } from '../../store/cart/cartAction';
import './cart.scss';

class Cart extends Component {

  changeQuantity = (type, product) => {
    this.props.changeQuantity({ type, product });
  };

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
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
                        disabled={product.quantity <= 0}
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
                </tr>
              );
            })}
          </tbody>
        </Table>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
