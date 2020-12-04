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
      const products = yield call(productsApi.getProducts);
      yield put(productAction.addProductSuccess(products));
      toast.success('Product added successfully');
    }
  } catch(error) {
    yield put(productAction.addProductError(error));
  }
}

function* watcherDeleteProduct() {
  yield takeLatest("DELETE_PRODUCT_REQUEST", workerDeleteProduct);
}

function* workerDeleteProduct(action) {
  try {
    const response = yield call(productsApi.deleteProduct(), action.payload);
    if (response) yield put(productAction.deleteProductSuccess(response));
  } catch(error) {
    yield put(productAction.deleteProductError(error));
  }
}

export default function* productsSaga() {
  yield all([
    fork(watcherGetProduct),
    fork(watcherAddProduct),
    fork(watcherDeleteProduct)
  ])
};
