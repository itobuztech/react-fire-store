import React, { Component }  from 'react';

import { Card, Button } from 'react-bootstrap';

import './product.scss';

class Product extends Component {

  render() {
    const { product, buy, edit, editClicked, deleteClicked } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          {/* onClick={() => this.buy()} */}
          {
            buy ?
            (
              <Button variant="primary">
                Buy
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
