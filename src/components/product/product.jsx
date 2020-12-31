import React, { Component }  from 'react';

import { Card, Button } from 'react-bootstrap';

import './product.scss';

class Product extends Component {

  render() {
    const { product, buy, edit, addToCartClicked, editClicked, deleteClicked } = this.props;
    return (
      <Card className="align-items-stretch justify-content-between">
        <div>
          <Card.Img variant="top" src={product.image} />
        </div>
        <Card.Body className="product__detail">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          {
            buy ?
            (
              <Button variant="primary" onClick={() => addToCartClicked(product)}>
                Add to Cart
              </Button>
            ): null
          }
          {
            edit ?
            (
              <div className="d-flex justify-content-around align-items-center">
                <Button variant="primary" onClick={editClicked}>
                  Edit
                </Button>
                <Button variant="danger" onClick={deleteClicked}>
                  Delete
                </Button>
              </div>
            ): null
          }
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
