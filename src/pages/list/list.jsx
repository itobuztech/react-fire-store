import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Product from '../../components/product/product';

class List extends Component {
  render() {
    const { products } = this.props;
    return (
      <div className='products__wrapper'>
        <Container>
          <Row>
            { products.map((product, index) => {
              return (
                <Col md={4} lg={4} key={index} className="mt-4">
                  <Product product={product}></Product>
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
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
