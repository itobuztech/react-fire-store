import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { productAction } from '../../store/products/prodctsAction';
import { cartAction } from '../../store/cart/cartAction';
import Product from '../../components/product/product';
import './products.scss';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
  }

  buy = (product) => {
    this.props.cart.filter((item) => item.title === product.title).length > 0
      ? toast.error('Product is already added to cart')
      : this.props.addTocart({ ...product, quantity: 1 });
  };

  render() {
    const { products } = this.props;
    return (
      <div className='products__wrapper'>
        <Container>
          <Row>
            {products.length > 0
              ? products.map((product, index) => {
                  return (
                    <Col md={4} lg={4} key={index} className='mt-4 d-flex'>
                      <Product
                        product={product}
                        buy={true}
                        addToCartClicked={(product) => this.buy(product)}
                      ></Product>
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    productsError: state.productsReducer.productsError,
    productsSuccess: state.productsReducer.productsSuccess,
    cart: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(productAction.getProductRequest()),
    addTocart: (payload) => dispatch(cartAction.addToCart(payload)),
    getCart: () => dispatch(cartAction.getCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
