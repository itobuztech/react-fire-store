import { takeLatest, call, put, fork, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { productAction } from './prodctsAction';
import { productsApi } from '../../services/products-api';

function* watcherGetProduct() {
  yield takeLatest("GET_PRODUCTS_REQUEST", workerGetProduct);
}

function* workerGetProduct() {
  try {
    const response = yield call(productsApi.getProducts);
    if (response) yield put(productAction.getProductSuccess(response));
  } catch(error) {
    yield put(productAction.getProductError(error));
  }
}

function* watcherAddProduct() {
  yield takeLatest("ADD_PRODUCT_REQUEST", workerAddProduct);
}

function* workerAddProduct(action) {
  try {
    const response = yield call(productsApi.addProducts, action.payload);
    if (response) {
      yield put(productAction.addProductSuccess(action.payload));
      toast.success('Product added successfully');
    }
  } catch(error) {
    yield put(productAction.addProductError(error));
  }
}

function* watcherEditProduct() {
  yield takeLatest("EDIT_PRODUCT_REQUEST", workerEditProduct);
}

function* workerEditProduct(action) {
  try {
    yield call(productsApi.editProduct, action.payload, action.docId);
    yield put(productAction.editProductSuccess(action.payload, action.docId));
    toast.success('Product updated successfully');
  } catch(error) {
    yield put(productAction.editProductError(error));
  }
}

function* watcherDeleteProduct() {
  yield takeLatest("DELETE_PRODUCT_REQUEST", workerDeleteProduct);
}

function* workerDeleteProduct(action) {
  try {
    yield call(productsApi.deleteProduct, action.id);
    yield put(productAction.deleteProductSuccess(action.id));
    toast.success('Product deleted successfully');
  } catch(error) {
    yield put(productAction.deleteProductError(error));
  }
}

export default function* productsSaga() {
  yield all([
    fork(watcherGetProduct),
    fork(watcherAddProduct),
    fork(watcherEditProduct),
    fork(watcherDeleteProduct)
  ])
};
