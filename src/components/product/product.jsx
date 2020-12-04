import React, { Component }  from 'react';

import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import './product.scss';

class Product extends Component {
  render() {
    const { product, buy } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          {/* onClick={() => this.buy()} */}
          <Button variant="primary">
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default connect()(Product);
