import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './product.scss';

class Product extends Component {
  render() {
    const {
      product,
      buy,
      edit,
      addToCartClicked,
      editClicked,
      deleteClicked,
    } = this.props;
    return (
      <Card className='align-items-stretch justify-content-between'>
        <div>
          <Card.Img variant='top' src={product.image} />
        </div>
        <Card.Body className='product__detail'>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          {buy ? (
            !product.isInCart ? (
              <Button
                variant='primary'
                onClick={() => addToCartClicked(product)}
              >
                Add to Cart
              </Button>
            ) : (
              <Button variant='primary' className="product__go-to-cart">
                <Link to="/cart">
                  Go to Cart
                </Link>
              </Button>
            )
          ) : null}
          {edit ? (
            <div className='d-flex justify-content-around align-items-center'>
              <Button variant='primary' onClick={editClicked}>
                Edit
              </Button>
              <Button variant='danger' onClick={deleteClicked}>
                Delete
              </Button>
            </div>
          ) : null}
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
