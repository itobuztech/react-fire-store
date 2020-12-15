import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Product from '../../components/product/product';
import { productAction } from '../../store/products/prodctsAction';
import AddProductModal from '../../components/modals/add-product-modal/add-product-modal';
import Header from '../../components/header/header';

class List extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  editProductModal = (id) => {
    this.props.openAddProductModal({
      type: 'PRODUCT_MODAL_OPEN',
    });
    const selectedProduct = this.props.products.filter(
      (product) => product.id === id
    )[0];
    this.props.selectedProduct(selectedProduct);
  };

  delete = (id) => {
    this.props.deleteProduct(id);
  };

  handleClose = () => {
    this.props.closeAddProductModal({
      type: 'PRODUCT_MODAL_CLOSE',
    });
  };

  submitForm = (val) => {
    this.props.editProduct(val, this.props.selectedProductFormData.id);
  };

  render() {
    const {
      products,
      modalOpen,
      selectedProduct,
      selectedProductFormData,
    } = this.props;
    return (
      <div>
        <Header></Header>
        <div className='products__wrapper'>
          <AddProductModal
            selectedProductData={selectedProductFormData}
            modalOpen={modalOpen}
            handleClose={this.handleClose}
            submitForm={(val) => this.submitForm(val)}
          ></AddProductModal>
          <Container>
            <Row>
              {products.map((product, index) => {
                return (
                  <Col md={4} lg={4} key={index} className='mt-4'>
                    <Product
                      product={product}
                      edit={true}
                      editClicked={() => this.editProductModal(product.id)}
                      deleteClicked={() => this.delete(product.id)}
                    ></Product>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    modalOpen: state.productsReducer.modalOpen,
    selectedProductFormData: state.productsReducer.selectedProductFormData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(productAction.getProductRequest()),
    selectedProduct: (payload) =>
      dispatch(productAction.selectedProduct(payload)),
    editProduct: (payload, docId) =>
      dispatch(productAction.editProductRequest(payload, docId)),
    deleteProduct: (id) => dispatch(productAction.deleteProductRequest(id)),
    openAddProductModal: (payload) => dispatch(payload),
    closeAddProductModal: (payload) => dispatch(payload),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
