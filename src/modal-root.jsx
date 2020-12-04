import { connect } from 'react-redux';

import AddProductModal from './components/modals/add-product-modal/add-product-modal';

const MODAL_COMPONENTS = {
  'ADD_PRODUCT': AddProductModal,
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return;
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

const mapStateToProps = (state) => {
  return {
    modalType: state.modalReducer.modalType,
    modalProps: state.modalReducer.modalProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRoot)
