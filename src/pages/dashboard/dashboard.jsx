import React, { Component } from 'react';

import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './dashboard.scss';
import { AddProductModal } from '../../components/modals/add-product-modal/add-product-modal';
import { productAction } from '../../store/products/prodctsAction';
import { history } from '../../route';

class Dashboard extends Component {

  handleClose = () => {
    this.props.closeAddProductModal({
      type: 'PRODUCT_MODAL_CLOSE',
    });
  };

  submitForm = (val) => {
    this.props.addProduct(val);
  };

  render() {
    const { openAddProductModal, modalOpen } = this.props;
    return (
      <div className='dashboard__wrapper'>
        <AddProductModal
          modalOpen={modalOpen}
          handleClose={this.handleClose}
          submitForm={(val) => this.submitForm(val)}
        ></AddProductModal>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <Card.Title className='text-center'>Product</Card.Title>
                  <div className='dashboard__btn-wrapper'>
                    <div className='dashboard__buttons'>
                      <Button
                        variant='primary'
                        onClick={() =>
                          openAddProductModal({
                            type: 'PRODUCT_MODAL_OPEN',
                          })
                        }
                      >
                        Add
                      </Button>
                      <Button variant='primary'>
                        <Link to="/list">
                          List
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.productsReducer.modalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openAddProductModal: (payload) => dispatch(payload),
    closeAddProductModal: (payload) => dispatch(payload),
    addProduct: (payload) => dispatch(productAction.addProductRequest(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
