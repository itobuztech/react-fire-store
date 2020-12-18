import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { productAction } from '../../store/products/prodctsAction';
import { cartAction } from '../../store/cart/cartAction';
import Product from '../../components/product/product';
import './products.scss';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  buy = (product) => {
    console.log({product});
    this.props.addTocart(product);
  }

  render() {
    const { products } = this.props;

    return (
      <div className='products__wrapper'>
        <Container>
          <Row>
            { products.map((product, index) => {
              return (
                <Col md={4} lg={4} key={index} className="mt-4">
                  <Product product={product} buy={true} addToCartClicked={(product) => this.buy(product)}></Product>
                </Col>
              );
            })}
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
    productsSuccess: state.productsReducer.productsSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(productAction.getProductRequest()),
    addTocart: (payload) => dispatch(cartAction.addToCart(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
